import { Response, Request } from "express";
import { db1 } from "../../../../utils/db1";
import { db2 } from "../../../../utils/db2";
import { db3 } from "../../../../utils/db3";
import path from "path";
import fs from "fs";
import { authenticateJWT } from '@/middlewares/bearerToken';



export const get = [authenticateJWT,async (req: Request, res: Response) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  console.log(req.params.department_code);
  
  try {
   let data = await db1.$queryRaw`
    SELECT 
      tpf.project_id,
      tp.project_name,
      tpf.flow_id,
      mpf.flow,
      tpf.status 
    FROM 
      tr_project_flow tpf 
      JOIN tr_project tp ON tpf.project_id = tp.id  
      JOIN tr_request tr ON tp.request_id = tr.id 
      JOIN mst_project_flow mpf ON tpf.flow_id = mpf.id 
    WHERE 
      tr.department_code LIKE ${'%' + req.params.department_code + '%'}
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
}];
