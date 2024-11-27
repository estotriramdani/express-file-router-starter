import type { Request, Response } from 'express';
import { generateError, generateRandomString } from '@/utils';
import { digital_twin_db } from '@/utils/db';

export const get = async (req: Request, res: Response) => {
  try {
    const { machineSlug, functionSlug } =req.params

    const data = await digital_twin_db.mst_function.findMany({})

  } catch (error) {
    res.status(400).json({
      errors: [
        generateError({
          code: 400,
          description: error?.message || 'Internal Server Error',
          id: generateRandomString(10),
          status: 400,
          title: error?.message || 'Internal Server Error',
          timestamp: new Date().toISOString(),
        }),
      ],
    });
  }
};
