import { Response, Request } from "express";
import { db1 } from "../../utils/db1";
import { authenticateJWT } from '../../middlewares/bearerToken';
import { ok } from '../../tools/common';


export const get = [ async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);
  
  const data = await db1.tr_project.findMany({
    select: {
      id: true,
      request_id: true,
      application_id: true,
      project_code: true,
      project_name: true,
      background: true,
      issue_description: true,
      business_impact: true,
      group_id: true,
      plan_start_date: true,
      plant_end_date: true,
      real_start_date: true,
      real_end_date: true,
      percent_done: true,
      auto_percent_done: true,
      state: true,
      is_deleted: true,
      created_at: true,
      created_by: true,
      mst_group: true,
      mst_project_state: true,

    },
    where: {
      is_deleted: "0"
    }
  })
  ok(res, data);
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