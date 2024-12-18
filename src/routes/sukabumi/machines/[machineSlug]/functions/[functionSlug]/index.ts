import type { Request, Response } from 'express';
import { digital_twin_db } from '@/lib/db';
import { catchResponse } from '@/utils/response';

export const get = async (req: Request, res: Response) => {
  try {
    const { machineSlug, functionSlug } =req.params

    const data = await digital_twin_db.mst_function.findMany({})

  } catch (error) {
    catchResponse(res, error);
  }
};
