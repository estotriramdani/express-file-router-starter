import { db1 } from "../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../middlewares/bearerToken';

export const get =[ async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.tr_project_task.findMany({
    where: {
      project_id: parseInt(req.params.id) as number,
      is_deleted: false,
    },
    include: {
      tr_project_task: {
        select: {
          task_name: true,
        }
      },
      tr_project: {
        select: {
          project_name: true,
        }
      },
      mst_authorization: {
        select: {
          employee_code: true,
          employee_name: true,
        },
        where: { is_deleted: false },
      },
    },
  });

  return res.json({data});
}];


export const put = [authenticateJWT, async (req: Request, res: Response) => {
  let {parent_id} = req.body
  const form_data = req.body;
  try {

    // calculate cost if plan_duration and pic exist
    if (form_data.plan_duration && form_data.pic) {
      const pic = await db1.mst_authorization.findUnique({
        where: { employee_code: form_data.pic },
        select: { employee_code: true },
      });

      const pic_hourly = await db1.mst_authorization.findUnique({
        where: { employee_code: pic.employee_code },
        select: { mst_manpower_cost: {
          select: { hourly: true },
        } },
      });

      form_data.cost = (form_data.plan_duration/3600) * pic_hourly.mst_manpower_cost.hourly;
    }


    //the actual update
    const updateTask = await db1.tr_project_task.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });

    


    
    ///if punya parent
    if(parent_id) {
      const data_sibling = await db1.tr_project_task.findMany({
        where: { parent_id: parent_id },
      });

      let percentage_avg = data_sibling.reduce((acc, task) => acc + task.percent_done, 0) / data_sibling.length;

      const updateTask = await db1.tr_project_task.update({
        where: { id: parseInt(parent_id) },
        data: {percent_done :percentage_avg },
      });
    }

    return res.json(updateTask);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Failed to update task" });
  }
}];

export const del = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    await db1.tr_project_task.update({
      where: { id: parseInt(req.params.id) },
      data: { is_deleted: true }
    });
    // return res.status(204).end();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Failed to delete participant" });
  }
}];
