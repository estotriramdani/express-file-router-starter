import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';

export const get = [ authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const count = await db1.tr_project_team.count()
  const users = await db1.tr_project_team.findMany({
    where: {
      is_deleted : false
    },
  });

  return res.json({ count, data:users });
}];

export const post = [authenticateJWT, async (req: Request, res: Response) => {
  console.log(req.body);
  const { employee_code, project_id, is_deleted } = req.body.form_data;

  try {
    const existingUser = await db1.tr_project_team.findFirst({
      where: {
        employee_code: employee_code,
        project_id: project_id,
        is_deleted: is_deleted,
      },
    });

    if (existingUser) {
      console.log('duplikat');
      
      return res.status(400).json({ error: "Duplicate data: employee_code and project_id already exist." });
    }

    const newUser = await db1.tr_project_team.create({
      data: req.body.form_data,
    });
    
    return res.status(201).json(newUser);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Add Techniciant Failed" });
  }
}];