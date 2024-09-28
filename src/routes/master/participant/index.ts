import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';

export const get = [ authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const count = await db1.tr_project_participant.count()
  const users = await db1.tr_project_participant.findMany({
    where: {
      is_deleted : false
    },
  });

  return res.json({ count, data:users });
}];

export const post = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    const newUser = await db1.tr_project_participant.create({
      data: req.body,
    });
    
    return res.status(201).json(newUser);

  } catch (error) {
    return res.status(500).json({ error: "Failed to create user" });
  }
}];