import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";


export const get = [async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);
  
  const data = await db1.mst_application.findMany({
    where: {
      is_deleted: false
    }
  })

  return res.json({ data: data });
}];

export const post = [async (req: Request, res: Response) => {
  console.log('formAdd',req.body.form_data);
  try {
    const newUser = await db1.mst_application.create({
      data: req.body.form_data,
    });
    
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}];