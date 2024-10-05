import type { Response } from 'express';
import { ExtendedRequest } from '../../../types/auth';
import { authenticateJWT } from '@/middlewares/bearerToken';

export const post = async (req: ExtendedRequest, res: Response) => {};

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    res.json({ message: req.user.employment });
  },
];

export const put = async (req: ExtendedRequest, res: Response) => {};

export const del = async (req: ExtendedRequest, res: Response) => {};
