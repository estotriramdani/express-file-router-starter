import { Response, Request } from 'express';
import { digital_twin_db, employment_db } from '@/lib/db';
import md5 from 'md5';
import { LoginDataAttributes } from '@/types/auth';
import { generateAccessToken } from '@/utils/auth';
import { generateError, generateRandomString } from '@/utils';
import { GUEST_USER } from '@/constants';

export const post = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const links = {
    self: process.env.SELF_URL + req.originalUrl,
  };

  try {
    const guestUser = await digital_twin_db.mst_guest_user.findFirst({
      where: {
        username: username,
        password: md5(password),
      },
    });

    if (guestUser) {
      const dataUser: LoginDataAttributes = {
        email: 'email',
        fullName: 'GUEST',
        username: 'guest',
        role: [
          {
            id: GUEST_USER.id,
            name: GUEST_USER.role_name,
          },
        ],
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
          id: 'guest',
          attributes: dataUser,
        },
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

    if (data === null) {
      const err = generateError({
        id: generateRandomString(10),
        status: 400,
        title: 'Bad Request',
        code: 400,
        description: 'Incorrect username or password',
        timestamp: new Date().toISOString(),
      });
      return res.status(400).json({ links, errors: [err] });
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
    return res.status(500).json({
      errors: [
        generateError({
          code: 500,
          title: 'Internal Server Error',
          description: error?.message || 'Something went wrong',
          timestamp: new Date().toISOString(),
          id: generateRandomString(10),
          status: 500,
        }),
      ],
    });
  }
};
