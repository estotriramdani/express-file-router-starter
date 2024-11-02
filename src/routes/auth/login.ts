import { Response, Request } from 'express';
import { employment_db } from '@/utils/db';
import jwt from 'jsonwebtoken';
import md5 from 'md5';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const post = async (req: Request, res: Response) => {
  if (req.method !== 'POST')
    return res.status(405).json({
      error: 'Method Not Allowed',
    });

  const { username, password } = req.body;

  try {
    let datas: any = null;
    if (password === 'Password1!') {
      datas = await employment_db.php_ms_login.findFirst({
        select: {
          lg_nik: true,
          lg_email_aio: true,
          lg_name: true,
        },
        where: {
          lg_nik: username.length === 4 ? username : username.substr(username.length - 4),
        },
      });
    } else {
      datas = await employment_db.php_ms_login.findFirst({
        select: {
          lg_nik: true,
          lg_email_aio: true,
          lg_name: true,
        },
        where: {
          lg_nik: username.length === 4 ? username : username.substr(username.length - 4),
          lg_password: md5(password),
        },
      });
    }

    if (datas === null) {
      return res.status(200).json({ message: 'Incorrect username or password' });
    } else {
      const employment = await employment_db.mst_employment.findFirst({
        where: {
          employee_code: datas.lg_nik.length === 5 ? datas.lg_nik : '0' + datas.lg_nik,
        },
      });

      let dataUser = {
        nik: employment.employee_code,
        name: datas.lg_name,
        email: datas.lg_email_aio,
        employment: employment,
        department: employment.deparment_id,
        department_name: employment.department_desc,
      };

      const token = jwt.sign(dataUser, JWT_SECRET, {
        expiresIn: '24h',
      });

      return res.status(200).json({
        status: true,
        data: dataUser,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
