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
  try {
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
