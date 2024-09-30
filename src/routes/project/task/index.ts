import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';
import moment from "moment";


export const post = [authenticateJWT, async (req: Request, res: Response) => {
  const { form_data } = req.body;

  try {
    const newTask = await db1.tr_project_task.create({
      data: {
        project_id: form_data.project_id,
        content: form_data.content,
        task_name: form_data.task_name,
        plan_start_date: moment(form_data.plan_start_date).toISOString(),
        plan_end_date: moment(form_data.plan_start_date).toISOString(),
        plan_duration: form_data.plan_duration,
        percent_done: form_data.percent_done,
        cost: form_data.cost,
        task_type: form_data.task_type,
        task_category: form_data.task_category,
        status: form_data.status,
        parent_id: form_data.parent_id? form_data.parent_id : null,
        pic: form_data.pic,
      }
    });

    
    
    return res.status(201).json(newTask);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Add Task Failed" });
  }
}];