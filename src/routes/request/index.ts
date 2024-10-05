import { Response, Request } from 'express';
import moment from 'moment';
import { db1 } from '@/utils/db1';

export const post = async (req: Request, res: Response) => {
  if (req.method !== 'POST')
    return res.status(405).json({
      error: 'Method Not Allowed',
    });

  const {
    title,
    nik,
    issue_description,
    expected_completion_date,
    business_impact,
    background,
    category,
    urgency,
    type,
    department,
    department_name,
    approvals,
    files,
  } = req.body;

  try {
    const tr_request = await db1.tr_request.create({
      data: {
        entities_id: null,
        ticket_name: title,
        closed_date: null,
        creator: nik,
        status: 'Submit',
        urgency: urgency.value,
        expected_completion_date: moment(expected_completion_date).toISOString(),
        type: type.value,
        department_code: department ? department.toString() : null,
        is_project: null,
        background: background,
        issue_description: issue_description,
        business_impact: business_impact,
        created_by: nik,
        department_name: department_name,
      },
    });

    const idHeader = tr_request.id;

    await db1.tr_document.updateMany({
      where: {
        id: { in: files },
      },
      data: {
        type: 'request',
        type_id: idHeader,
      },
    });

    const validationData = approvals.map((validator) => ({
      request_id: idHeader,
      user_id: nik,
      user_id_validate: validator.code,
      status: 'Open',
    }));

    await db1.tr_request_validation.createMany({
      data: validationData,
    });

    const insertedValidators = await db1.tr_request_validation.findMany({
      where: {
        request_id: idHeader,
        status: 'Open',
      },
    });

    const base64Value = Buffer.from(idHeader.toString()).toString('base64');
    const urlEncodedValue = encodeURIComponent(base64Value);

    await db1.tr_notification.createMany({
      data: insertedValidators.map((validator) => ({
        notification_type: 'approval',
        employee_code: validator.user_id_validate,
        message: `You have a new request to validate`,
        action_url: `${process.env.FE_URL}/request/detail?value=${urlEncodedValue}`,
        is_read: false,
        created_by: nik,
      })),
    });

    return res.json({ status: true, data: 'Succeed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
