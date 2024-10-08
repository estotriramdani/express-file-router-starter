import { db1 } from "@/utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '@/middlewares/bearerToken';

export const get =[ async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.tr_project_task.findFirst({
    where: {
      id: parseInt(req.params.id) as number,
      is_deleted: false,
    },
    include: {
      tr_project_task: {
        select: {
          task_name: true,
        }
      },
      tr_project: true,
      mst_authorization: true,
    },
  });

  return res.json({data});
}];

export const put = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    const updateTask = await db1.tr_project_task.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
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