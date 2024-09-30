import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';


export const post = [authenticateJWT, async (req: Request, res: Response) => {
  const { form_data } = req.body.form_data;

  try {
    
    const newTask = await db1.tr_project_task.create({
      data: form_data,
    });
    
    return res.status(201).json(newTask);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Add Task Failed" });
  }
}];