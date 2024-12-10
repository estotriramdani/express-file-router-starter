import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const getData = await fetch(`http://10.10.2.70:3013${req.originalUrl.replace('/api/', '/')}`);

      const data = await getData.json();

      res.json(data);
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
