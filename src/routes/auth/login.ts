import { Response, Request } from 'express';
import { generateError, generateRandomString } from '@/utils';
import md5 from 'md5';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const post = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const whereClause = {
      username: username.length === 4 ? username : username.substr(username.length - 4),
      password: md5(password),
    };

    const dataUser = {
      id: 1,
      username: 'admin',
      email: '',
    };

    const token = jwt.sign(dataUser, JWT_SECRET, {
      expiresIn: '24h',
    });

    return res.json({});
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
