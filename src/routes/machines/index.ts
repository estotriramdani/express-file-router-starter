import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/utils/db';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const data = await digital_twin_db.mst_machine.findMany();
      res.json({ status: true, data });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];

export const post = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      res.json({ status: true, data: {} });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
