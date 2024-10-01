import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";


export const get = [async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);
  console.log('getMstRole');

  const role = await db1.mst_role.findMany({
    where: {
      is_deleted: false
    }
  });

  return res.json({ status: true, data: role });
}];

export const post = [async (req: Request, res: Response) => {
  console.log('formAdd',req.body.form_data);
  try {
    const newRole = await db1.mst_role.create({
      data: req.body.form_data,
    });
    
    return res.status(201).json(newRole);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create role" });
  }
}];