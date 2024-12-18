import type { Request, Response } from 'express';
import { generateError, generateRandomString } from '@/utils';
import { digital_twin_db } from '@/lib/db';
import { catchResponse } from '@/utils/response';

export const get = async (req: Request, res: Response) => {
  try {
    const links = {
      self: process.env.SELF_URL + req.originalUrl,
    };

    const data = await digital_twin_db.mst_function.findMany({
      where: {
        machine_slug: req.params.machineSlug,
      },
    });

    const transformed = data.map((item) => {
      return {
        type: 'functions',
        id: `${item.id}`,
        attributes: {
          slug: item.slug,
          name: item.name,
          placeholder: item.placeholder,
          value: {
            value: 1,
            last_update: new Date().toISOString(),
          }
        },
      };
    });

    res.json({
      links,
      data: transformed,
    });
  } catch (error) {
    catchResponse(res, error);
  }
};
