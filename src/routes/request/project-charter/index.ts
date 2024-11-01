import { Response, Request } from "express";
import { db1 } from "@/utils/db1";
import moment from "moment";

export const post = async (req: Request, res: Response) => {
  if (req.method !== "POST")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  try {
    const { dataOverview, dataOverviewGoals, submitType, dataUrs, dataMinimumViable, dataRisk } = req.body;

    let tr_project_overview = await db1.tr_project_overview.create({data: dataOverview})

    let tr_project_overview_goals = null;
    if (dataOverviewGoals.length > 0) {
      tr_project_overview_goals = await db1.tr_project_overview_goals.createMany({data: dataOverviewGoals});
    }

    let tr_project_scope = null;
    if (dataUrs.length > 0) {
      tr_project_scope = await db1.tr_project_scope.createMany({data: dataUrs});
    }

    let tr_project_minimum_viable = null;
    if (dataMinimumViable.length > 0) {
      tr_project_minimum_viable = await db1.tr_project_minimum_viable.createMany({data: dataMinimumViable});
    }

    let tr_project_risk_mitigation = null;
    if (dataRisk.length > 0) {
      tr_project_risk_mitigation = await db1.tr_project_risk_mitigation.createMany({data: dataRisk});
    }

    let tr_project_flow = null
    if(submitType == 'submit'){
      tr_project_flow = await db1.tr_project_flow.updateMany({
        where: { project_id: parseInt(dataOverview.project_id), flow_id: 3 },
        data: { status: true, updated_by: dataOverview.created_by }
      });
    }

    return res.json({ status: true, data: 'Succeed' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
