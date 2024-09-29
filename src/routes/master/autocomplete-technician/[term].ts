import { db1 } from "../../../utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '../../../middlewares/bearerToken';
import { db3 } from "../../../utils/db3";

export const get = [authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);
 
  try {
    const query = db1.$queryRaw`
    SELECT
      a.*,
      b.profile_id,
      c.profile_name
    FROM
      mst_authorization a
      JOIN mst_authorization_profile b ON a.employee_code = b.employee_code
      JOIN mst_profile c ON b.profile_id = c.id
    WHERE 
    b.profile_id = 1
    AND (a.employee_code LIKE ${`%${req.params.term}%`} OR a.employee_name LIKE ${`%${req.params.term}%`})
    LIMIT 10
    `;
    const data = await query;

    return res.status(200).json({
      status: true,
      data: data,
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Failed to get data" });
  }

}];
