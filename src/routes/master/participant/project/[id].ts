import { db1 } from "../../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../../middlewares/bearerToken';

export const get = [async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.$queryRaw`
  SELECT
    a.*,
    b.employee_name,
    b.profile_pic 
  FROM
    tr_project_participant a
    JOIN aio_employee.mst_employment b 
    ON a.employee_code COLLATE utf8mb4_unicode_ci = b.employee_code COLLATE utf8mb4_unicode_ci
  WHERE
    a.project_id = ${parseInt(req.params.id)}
    AND is_deleted = 0
  `
  return res.json({ data });
}];


