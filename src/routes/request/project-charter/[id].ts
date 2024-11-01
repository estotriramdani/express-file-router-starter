import { Response, Request } from "express";
import { db1 } from "@/utils/db1";

export const get = async (req: Request, res: Response) => {
  if (req.method !== "GET")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  try {
    let dataOverview = []
    let dataOverviewGoals = []
    let dataUrs = []
    let dataMinimumViable = []
    let dataRisk = []

    dataOverview = await db1.tr_project_overview.findMany({
      where: {
        project_id: parseInt(req.params.id)
      }
    });

    dataOverviewGoals = await db1.tr_project_overview_goals.findMany({
      where: {
        project_id: parseInt(req.params.id),
        is_deleted: false
      }
    });

    dataUrs = await db1.tr_project_scope.findMany({
      where: {
        project_id: parseInt(req.params.id),
        is_deleted: false
      }
    });

    dataMinimumViable = await db1.tr_project_minimum_viable.findMany({
      where: {
        project_id: parseInt(req.params.id),
        is_deleted: false
      }
    });

    dataRisk = await db1.tr_project_risk_mitigation.findMany({
      where: {
        project_id: parseInt(req.params.id),
        is_deleted: false
      }
    });

    return res.json({
      status: true, data: {
        overview: dataOverview,
        overviewGoals: dataOverviewGoals,
        urs: dataUrs,
        minimum_viable: dataMinimumViable,
        risk: dataRisk
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const put = [async (req: Request, res: Response) => {
  if (req.method !== "PUT")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  try {
    const { dataOverview, dataOverviewGoals, submitType, dataUrs, dataMinimumViable, dataRisk } = req.body;

    await db1.tr_project_overview.update({
      where: { id: parseInt(dataOverview.id) },
      data: dataOverview.data,
    });

    if(dataOverviewGoals.length > 0){
      dataOverviewGoals.forEach(async (item: any) => {
        if (item.id) {
          await db1.tr_project_overview_goals.update({ where: { id: parseInt(item.id) }, data: item })
        } else {
          await db1.tr_project_overview_goals.create({data: item})
        }
      })
    }

    if(dataUrs.length > 0){
      dataUrs.forEach(async (item: any) => {
        if (item.id) {
          await db1.tr_project_scope.update({ where: { id: parseInt(item.id) }, data: item })
        } else {
          await db1.tr_project_scope.create({data: item})
        }
      })
    }

    if(dataMinimumViable.length > 0){
      dataMinimumViable.forEach(async (item: any) => {
        if (item.id) {
          await db1.tr_project_minimum_viable.update({ where: { id: parseInt(item.id) }, data: item })
        } else {
          await db1.tr_project_minimum_viable.create({data: item})
        }
      })
    }
    
    if(dataRisk.length > 0){
      dataRisk.forEach(async (item: any) => {
        if (item.id) {
          await db1.tr_project_risk_mitigation.update({ where: { id: parseInt(item.id) }, data: item })
        } else {
          await db1.tr_project_risk_mitigation.create({data: item})
        }
      })
    }

    
    let tr_project_flow = null
    if(submitType == 'submit'){
      tr_project_flow = await db1.tr_project_flow.updateMany({
        where: { project_id: parseInt(dataOverview.data.project_id), flow_id: 3 },
        data: { status: true, updated_by: dataOverview.data.created_by }
      });
    }

    return res.json({ status: true, data: 'Succeed' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, error: "Internal Server Error" });
  }
}];