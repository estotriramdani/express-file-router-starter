import jwt from 'jsonwebtoken';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest, LoginDataAttributes } from '@/types/auth';
import { generateError, generateRandomString } from '@/utils';
import { generateAccessToken } from '@/utils/auth';
import type { Request, Response } from 'express';

export const get = async (req: ExtendedRequest, res: Response) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        status: false,
        message: 'Authorization header missing',
      });
    }

    const splitted = authHeader.split(' ');
    const token = splitted?.[1];

    // ganti di postman dengan token yang dihasilkan oleh login menggunakan refresh token (tambah di environment)
    jwt.verify(token || authHeader, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        console.error('Token invalid:', err.message);
        res.status(400).json({
          errors: [
            generateError({
              code: 400,
              title: 'Bad Request',
              description: err?.message || 'Something went wrong',
              timestamp: new Date().toISOString(),
              id: generateRandomString(10),
              status: 400,
            }),
          ],
        });
      } else {
        req.user = decoded as LoginDataAttributes;
        if (req?.user?.iat) {
          delete req.user.iat;
        }
        if (req?.user?.exp) {
          delete req.user.exp;
        }
        console.log(req.user);
        const accessToken = generateAccessToken(req.user);
        res.status(200).json({
          links: {
            self: process.env.SELF_URL + req.originalUrl,
          },
          data: {
            type: 'access-token',
            id: req.user.username,
            attributes: {
              access: accessToken,
            },
          },
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          code: 400,
          title: 'Bad Request',
          description: error?.message || 'Something went wrong',
          timestamp: new Date().toISOString(),
          id: generateRandomString(10),
          status: 400,
        },
      ],
    });
  }
};
