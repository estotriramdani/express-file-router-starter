import { Response, Request } from 'express';
import { db1 } from '@/utils/db1';
import { createNotification } from '@/services/notification';

export const post = async (req: Request, res: Response) => {
  if (req.method !== 'POST')
    return res.status(405).json({
      error: 'Method Not Allowed',
    });

  const { employee_code, id_header } = req.body;

  try {
    const checkExist = await db1.tr_request_technician.findMany({
      where: {
        request_id: parseInt(id_header),
        employee_code: employee_code,
      },
    });

    let tr_request_technician = null;

    if (checkExist.length === 0) {
      tr_request_technician = await db1.tr_request_technician.createMany({
        data: {
          request_id: parseInt(id_header),
          employee_code: employee_code,
        },
      });
    }

    const base64Value = Buffer.from(id_header.toString()).toString('base64');
    const urlEncodedValue = encodeURIComponent(base64Value);

    await createNotification({
      action_url: `${process.env.FE_URL}/request/detail?value=${urlEncodedValue}`,
      title: 'Ticket Technician',
      message: `You are being added as technician for request ID: ${id_header}`,
      employee_code: employee_code,
    });

    return res.json({ status: true, data: tr_request_technician });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
