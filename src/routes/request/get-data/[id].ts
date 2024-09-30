import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { db2 } from "../../../utils/db2";
import { db3 } from "../../../utils/db3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import moment from 'moment'

const JWT_SECRET = process.env.JWT_SECRET || '';

export const get = async (req: Request, res: Response) => {
  if (req.method !== "GET")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  const { nik, department } = req.body;

  try {
    const request = await db1.tr_request.findFirst({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const validation = await db1.$queryRaw`
    SELECT
      a.*,
      b.employee_name,
      b.profile_pic 
    FROM
      tr_request_validation a
      JOIN aio_employee.mst_employment b 
      ON a.user_id_validate COLLATE utf8mb4_unicode_ci = b.employee_code COLLATE utf8mb4_unicode_ci
    WHERE
      a.request_id = ${parseInt(req.params.id)}
      
      `
    const document = await db1.tr_document.findMany({
      where: {
        type: 'request',
        type_id: parseInt(req.params.id)
      }
    });


    const technician = await db1.$queryRaw`
    SELECT
      a.*,
      b.employee_name,
      b.profile_pic 
    FROM
      tr_request_technician a
      JOIN aio_employee.mst_employment b 
      ON a.employee_code COLLATE utf8mb4_unicode_ci = b.employee_code COLLATE utf8mb4_unicode_ci
    WHERE
      a.request_id = ${parseInt(req.params.id)}
      AND a.is_deleted != 1
      `


      const project = await db1.tr_project.findMany({
        where: {
          request_id: parseInt(req.params.id)
        }
      });



    return res.json({
      status: true, data: {
        request: request,
        validation: validation,
        document: document,
        technician: technician,
        project:project
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
