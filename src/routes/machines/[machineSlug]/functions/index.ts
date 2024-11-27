import type { Request, Response } from 'express';
import { generateError, generateRandomString } from '@/utils';
import { digital_twin_db } from '@/lib/db';

export const get = async (req: Request, res: Response) => {
  try {
    const links = {
      self: process.env.SELF_URL + req.originalUrl,
    };

    const data = await digital_twin_db.mst_function.findMany({
      where: {
        machine_slug: req.params.machineSlug,
      }
    });

    const transformed = data.map((item) => {
      return {
        type: 'functions',
        id: item.id,
        attributes: {
          slug: item.slug,
          name: item.name,
          placeholder: 1,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        },
      };
    });

    res.json({
      links,
      data: transformed,
    });
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
