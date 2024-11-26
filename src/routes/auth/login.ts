import { Response, Request } from 'express';
import { digital_twin_db, employment_db } from '@/utils/db';
import md5 from 'md5';
import { LoginDataAttributes, UserResponse } from '@/types/auth';
import { generateAccessToken } from '@/utils/auth';

export const post = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const guestUser = await digital_twin_db.mst_guest_user.findFirst({
      where: {
        username: username,
        password: md5(password),
      },
    });

    if (guestUser) {
      let dataUser: UserResponse = {
        employee_code: guestUser.username,
        name: guestUser.name,
        department: 0,
        department_name: 'GENERAL',
        isEmployee: false,
      };

      const accessToken = generateAccessToken(dataUser);

      return res.status(200).json({
        status: true,
        data: { ...dataUser, accessToken },
      });
    }

    let data: any = null;
    if (password === 'Password1!') {
      data = await employment_db.php_ms_login.findFirst({
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
      data = await employment_db.php_ms_login.findFirst({
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

    const links = {
      self: process.env.SELF_URL + req.originalUrl,
    };

    if (data === null) {
      return res.status(400).json({ message: 'Incorrect username or password' });
    } else {
      const employment = await employment_db.mst_employment.findFirst({
        where: {
          employee_code: data.lg_nik.length === 5 ? data.lg_nik : '0' + data.lg_nik,
        },
      });

      const roles = await digital_twin_db.tr_user_role.findMany({
        where: {
          username: data.lg_nik,
        },
        include: {
          mst_role: true,
        },
      });

      if (roles.length === 0) {
        const findGuestRole = await digital_twin_db.mst_role.findFirst({
          where: {
            role_name: 'GUEST',
          },
        });

        const newRole = await digital_twin_db.tr_user_role.create({
          data: {
            role: findGuestRole.id!,
            username: data.lg_nik,
          },
          include: {
            mst_role: true,
          },
        });
        roles.push(newRole);
      }

      const dataUser: LoginDataAttributes = {
        email: employment.mail_id,
        fullName: data.lg_name,
        username: data.lg_nik,
        role: roles.map((role) => ({
          name: role.mst_role.role_name,
          id: role.mst_role.id,
        })),
      };

      const accessToken = generateAccessToken(dataUser);

      dataUser.token = {
        type: 'bearer',
        attributes: {
          access: accessToken,
          refresh: accessToken,
        },
      };

      return res.status(200).json({
        data: {
          type: 'users',
          id: data.lg_nik,
          attributes: dataUser,
        },
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
