import { db1 } from "../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../middlewares/bearerToken';

export const get =[ async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.tr_project_team.findMany({
    where: {
      project_id: parseInt(req.params.id) as number,
      is_deleted: false,
    },
  });

  return res.json({data});
}];

export const put = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    const updateParticipant = await db1.tr_project_team.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    return res.json(updateParticipant);
  } catch (error) {
    return res.status(500).json({ error: "Failed to update participant" });
  }
}];

export const del = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    await db1.tr_project_team.update({
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