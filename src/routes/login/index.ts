import { Response, Request } from "express";
import { db2 } from "../../utils/db2";
import { db1 } from "../../utils/db1";
import jwt from "jsonwebtoken";
import md5 from "md5";

const JWT_SECRET = process.env.JWT_SECRET || '';

export const post = async (req: Request, res: Response) => {
  if (req.method !== "POST")
    return res.status(405).json({
      error: "Method Not Allowed",
    });

  const { nik, password } = req.body;

  try {
    const datas = await db2.pHP_ms_login.findFirst({
      select: {
        lg_nik: true,
        lg_email_aio: true,
        lg_name: true,
      },
      where: {
        lg_nik: nik,
        lg_password: md5(password),
      },
    });

    if (datas === null) {
      return res.status(200).json({ message: "Incorrect username or password" });
    } else {

      const role = await db1.mst_authorization.findFirst({
        select: {
          technician_level: true
        },
        where: {
          employee_code: datas.lg_nik
        },
      });
      
      let dataUser = {
        nik: datas.lg_nik,
        name: datas.lg_name,
        email: datas.lg_email_aio,
        role: role.technician_level
      }

      const token = jwt.sign(dataUser, JWT_SECRET, {
        expiresIn: "24h",
      });

      return res.status(200).json({
        data: dataUser,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
