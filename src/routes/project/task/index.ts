import { Response, Request } from "express";
import { db1 } from "@/utils/db1";
import { authenticateJWT } from '@/middlewares/bearerToken';
import moment from "moment";


export const post = [authenticateJWT, async (req: Request, res: Response) => {
  const { form_data } = req.body;

  try {

    // calculate cost if plan_duration and pic exist
    if (form_data.plan_duration && form_data.pic) {
      const pic = await db1.mst_authorization.findUnique({
        where: { employee_code: form_data.pic },
        select: { employee_code: true },
      });

      const pic_hourly = await db1.mst_authorization.findUnique({
        where: { employee_code: pic.employee_code },
        select: { mst_manpower_cost: {
          select: { hourly: true },
        } },
      });

      form_data.cost = (form_data.plan_duration/3600) * pic_hourly.mst_manpower_cost.hourly;
    }

    // the actual insert
    const newTask = await db1.tr_project_task.create({
      data: {
        project_id: form_data.project_id,
        content: form_data.content,
        task_name: form_data.task_name,
        plan_start_date: moment(form_data.plan_start_date).toISOString(),
        plan_end_date: moment(form_data.plan_start_date).toISOString(),
        plan_duration: form_data.plan_duration,
        real_start_date: moment(form_data.real_start_date).toISOString(),
        real_end_date: moment(form_data.real_start_date).toISOString(),
        real_duration: form_data.real_duration,
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