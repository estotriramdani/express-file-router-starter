import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '@/middlewares/bearerToken';


export const get = [authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const users = await db1.mst_project_flow.findMany()

  return res.json({ data: users });
}];