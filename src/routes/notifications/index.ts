import type { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { db1 } from '@/utils/db1';

export const post = async (req: ExtendedRequest, res: Response) => {};

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    const data = await db1.tr_notification.findMany({
      where: {
        employee_code: {
          endsWith: req?.user?.employment?.employee_code,
        },
        is_read: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    res.json({ status: true, data: data });
  },
];
