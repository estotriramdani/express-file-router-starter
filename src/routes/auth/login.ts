import { Response, Request } from 'express';
import { generateError, generateRandomString } from '@/utils';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import { auth_db } from '@/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const post = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await auth_db.users.findFirst({
      where: {
        username: username,
        password: md5(password),
      },
      select: {
        username: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(403).json({
        status: false,
        message: 'Username or password is wrong',
      });
    }

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1d' });

    res.json({
      status: true,
      data: { ...user, token: token },
    });
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
