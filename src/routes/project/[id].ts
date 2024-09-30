import { Response, Request } from "express";
import { db1 } from "../../utils/db1";
import { authenticateJWT } from '../../middlewares/bearerToken';
import { apiOk } from '../../tools/common';

export const del = [authenticateJWT, async (req: Request, res: Response) => {
    try {
      await db1.tr_project.update({
        where: { id: parseInt(req.params.id) },
        data: { is_deleted: "1" }
      });
      // return res.status(204).end();
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: "Failed to delete career area" });
    }
  }];



  export const get = [authenticateJWT,  async (req: Request, res: Response) => {
    if (req.method !== "GET") return res.status(405);
    
    const data = await db1.tr_project.findMany({
      select: {
        id: true,
        request_id: true,
        expected_completion: true,
        application_id: true,
        project_code: true,
        project_name: true,
        background: true,
        issue_description: true,
        business_impact: true,
        group_id: true,
        plan_start_date: true,
        plan_end_date: true,
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
      where: { id: parseInt(req.params.id) }
    })
    apiOk(res, data);
  }];