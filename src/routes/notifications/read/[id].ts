import type { Response } from 'express';
import { ExtendedRequest } from '@/types/auth';
import { db1 } from '@/utils/db1';
import { authenticateJWT } from '@/middlewares/bearerToken';

export const put = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    try {
      const findExist = await db1.tr_notification.findFirst({
        where: {
          id: parseInt(id),
          employee_code: {
            endsWith: req.user.employment.employee_code,
          },
        },
      });

      if (!findExist) {
        return res.status(404).json({ status: false, message: 'Data not found' });
      }

      await db1.tr_notification.update({
        where: { id: parseInt(id) },
        data: {
          is_read: true,
        },
      });

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

      return res.json({ status: true, message: 'Succeed', data: data });
    } catch (error) {
      return res.status(500).json({ status: false, message: error.message });
    }
  },
];
