import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { employment_db } from '@/utils/db';
import { transformEmployeeCode } from '@/utils';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await employment_db.mst_employment.findFirst({
        where: {
          employee_code: transformEmployeeCode(req.query.employee_code as string, 5),
        },
        select: {
          id: true,
          employee_code: true,
          employee_name: true,
          employment_ou: true,
          employment_ou_desc: true,
          mail_id: true,
          phone_number: true,
          department_code: true,
          department_desc: true,
          position_code: true,
          position_desc: true,
          job_grade_code: true,
          job_grade_desc: true,
        },
      });

      return res.json({ status: true, data });
    } catch (error) {
      console.error(error);
      return res.json({ status: false, message: error.message });
    }
  },
];
