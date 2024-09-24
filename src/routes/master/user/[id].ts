import { db1 } from "../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../middlewares/bearerToken';

export const get =[authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.mst_authorization.findUnique({
    where: {
      id: parseInt(req.params.id) as number,
    },
  });

  return res.json({data});
}];

export const put = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    const updateUser = await db1.mst_authorization.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    return res.json(updateUser);
  } catch (error) {
    return res.status(500).json({ error: "Failed to update career area" });
  }
}];

export const del = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    await db1.mst_authorization.delete({
      where: { id: parseInt(req.params.id) },
    });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete career area" });
  }
}];