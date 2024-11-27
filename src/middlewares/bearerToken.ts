import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { ExtendedRequest, UserResponse } from '@/types/auth';

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

export const authenticateJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      status: false,
      message: 'Authorization header missing',
    });
  }

  try {
    const splitted = authHeader.split(' ');
    const token = splitted?.[1];

    jwt.verify(token || authHeader, SECRET_KEY, (err, decoded) => {
      if (err) {
        console.error('Token invalid:', err.message);
        res.status(400).json({
          message: 'Invalid token.',
        });
      } else {
        req.user = decoded as UserResponse;
        if (
          req.user.employee_code?.toLowerCase().startsWith('guest') &&
          req.method.toLowerCase() !== 'get'
        ) {
          return res.status(403).json({
            status: false,
            message: 'Guest users cannot perform this action',
          });
        }
        next();
      }
    });
  } catch (ex) {
    res.status(400).json({
      message: 'Invalid token.',
    });
  }
};
