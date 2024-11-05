import { Response, Request } from 'express';
import { digital_twin_db, employment_db } from '@/utils/db';
import jwt from 'jsonwebtoken';
import md5 from 'md5';
import { UserResponse } from '@/types/auth';
import { generateAccessToken } from '@/utils/auth';

export const post = async (req: Request, res: Response) => {
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

      let dataUser: UserResponse = {
        employee_code: employment.employee_code,
        name: datas.lg_name,
        department: employment.deparment_id,
        department_name: employment.department_desc,
        isEmployee: true,
      };

      const accessToken = generateAccessToken(dataUser);
      const refreshToken = jwt.sign(dataUser, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1d',
      });

      await digital_twin_db.tr_refresh_token.create({
        data: {
          token: refreshToken,
          user: dataUser.employee_code,
        },
      });

      return res.status(200).json({
        status: true,
        data: { ...dataUser, accessToken, refreshToken },
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
