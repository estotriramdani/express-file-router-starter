import { dwh_db } from '@/lib/db';
import type { Request, Response } from 'express';

export const post = async (req: Request, res: Response) => {
  try {
    const data = await dwh_db.$queryRawUnsafe(req.body.query);
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
