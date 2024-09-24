import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";


export const get = [async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const users = await db1.mst_entities.findMany()

  return res.json({ data: users });
}];