import { Request, Response } from "express";
import { db1 } from "@/utils/db1";
import { authenticateJWT } from '@/middlewares/bearerToken';

export const post = [authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const { startDate, endDate, subDepartment } = req.body;

    let query = `
      SELECT 
        a.project_id,
        a.employee_code,
        b.employee_name,
        b.profile_pic,
        d.plan_start_date,
        d.plan_end_date,
    CAST(COUNT(c.id) AS CHAR) AS task_count
      FROM 
        tr_project_team a
      LEFT JOIN 
        aio_employee.mst_employment b 
        ON a.employee_code COLLATE utf8mb4_unicode_ci = b.employee_code COLLATE utf8mb4_unicode_ci
      LEFT JOIN 
        tr_project_task c 
        ON a.project_id = c.project_id
      LEFT JOIN 
        tr_project d 
        ON a.project_id = d.id
      WHERE 
        a.is_deleted = '0'
    `;
    if (startDate) {
      query += ` AND d.plan_start_date >= '${startDate}' `;
    }
    if (endDate) {
      query += ` AND d.plan_end_date <= '${endDate}' `;
    }
    if (subDepartment) {
      query += ` AND a.sub_department = '${subDepartment}' `;
    }
    query += `
      GROUP BY 
        a.project_id, 
        a.employee_code, 
        b.employee_name, 
        b.profile_pic, 
        d.plan_start_date, 
        d.plan_end_date
    `;

    const data = await db1.$queryRawUnsafe(query);
    return res.json({ data });
  } catch (error) {
    console.error("Error fetching project team data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}];


