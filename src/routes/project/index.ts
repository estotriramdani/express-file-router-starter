import { Response, Request } from 'express';
import { db1 } from '@/utils/db1';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { apiOk } from '@/tools/common';
import { createNotification } from '@/services/notification';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    if (req.method !== 'GET') return res.status(405);

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
      where: {
        is_deleted: '0',
      },
    });
    apiOk(res, data);
  },
];

export const post = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    console.log(req.body.form_data);
    
    const tr_project = await db1.tr_project.create({
      data: req.body.form_data,
    });
    const flows = await db1.mst_project_flow.findMany()
    
    if (req.body.form_data.request_id) {
      const requestData = await db1.tr_request.findUnique({
        where: {
          id: +req.body.form_data.request_id,
        },
      });
  
      if (requestData) {
        console.log('requestData');
        const base64Value = Buffer.from(requestData.id.toString()).toString('base64');
          const urlEncodedValue = encodeURIComponent(base64Value);
    
          await createNotification({
            action_url: `${process.env.FE_URL}/request/detail?value=${urlEncodedValue}`,
            employee_code: requestData.creator,
            message: `Project has been created for request ID: ${requestData.id}. Please submit project charter.`,
            title: 'Submit Project Chart',
            notification_type: 'Need Action',
          });
      }
    }

    for(const item of flows){
      await db1.tr_project_flow.create({
        data: {
          project_id: tr_project.id,
          flow_id: item.id,
          status: (item.id == 1 ? true:false),
          updated_by: (item.id == 1 ? tr_project.created_by:null)
        },
      });
    }

    return res.status(201).json({
      status: true,
      data:tr_project
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}];
