import { Response, Request } from 'express';
import { db1 } from '@/utils/db1';
import { createNotification } from '@/services/notification';
import { sendEmailRequestValidation } from '@/services/NotificationService';

export const post = async (req: Request, res: Response) => {
  if (req.method !== 'POST')
    return res.status(405).json({
      error: 'Method Not Allowed',
    });

  const { id_header, nik, solution, user_id_validate } = req.body;

  try {
    await db1.tr_request_validation.create({
      data: {
        request_id: parseInt(id_header),
        user_id: nik,
        user_id_validate: user_id_validate ? user_id_validate : nik,
        comment_validation: solution,
        status: user_id_validate ? 'Open' : 'Completed',
      },
    });

    const validation = await db1.$queryRaw`
    SELECT
      a.*,
      b.employee_name,
      b.profile_pic 
    FROM
      tr_request_validation a
      JOIN aio_employee.mst_employment b 
      ON a.user_id_validate COLLATE utf8mb4_unicode_ci = b.employee_code COLLATE utf8mb4_unicode_ci
    WHERE
      a.request_id = ${parseInt(id_header)}
      
      `;
    const base64Value = Buffer.from(id_header.toString()).toString('base64');
    const urlEncodedValue = encodeURIComponent(base64Value);

    const findTitle = await db1.tr_request.findFirst({
      where: {
        id: parseInt(id_header),
      },
    });

    await createNotification({
      notification_type: 'Need Action',
      employee_code: user_id_validate,
      message: `You have a new request to validate`,
      title: `Ticket: ${findTitle.ticket_name}.`,
      action_url: `${process.env.FE_URL}/request/detail?value=${urlEncodedValue}`,
    });

    await sendEmailRequestValidation({
      requestId: parseInt(id_header),
      validator: user_id_validate,
    });

    return res.json({ status: true, data: validation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
