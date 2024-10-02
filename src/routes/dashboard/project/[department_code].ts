import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { db2 } from "../../../utils/db2";
import { db3 } from "../../../utils/db3";
import path from "path";
import fs from "fs";



export const get = async (req: Request, res: Response) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
   let data = await db1.$queryRaw`
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

    return res.status(200).json({
      data: data,
      status: true
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};
