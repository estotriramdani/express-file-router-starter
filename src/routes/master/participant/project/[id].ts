import { db1 } from "../../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../../middlewares/bearerToken';

export const get = [async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.$queryRaw`
  SELECT
    a.*,
    b.category,
    b.department_code,
    c.cost
  FROM
    tr_project a
    JOIN tr_request b ON a.request_id = b.id
    LEFT JOIN (SELECT SUM(cost) as cost, project_id FROM tr_project_task GROUP BY project_id) AS c ON c.project_id = a.id
  WHERE b.department_code = ${parseInt(req.params.department_code)}
  `
  return res.json({ data });
}];


