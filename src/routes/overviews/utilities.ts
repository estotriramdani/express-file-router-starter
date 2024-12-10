import { digital_twin_db } from '@/lib/db';
import type { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  const data = await digital_twin_db.mst_overview.findMany({
    where: {
      area: 'UTILITY',
    },
  });
  
  const withAttributes = data.map((item) => {
    return {
      type: 'overview',
      id: item.id,
      attributes: {
        slug: item.slug,
        name: item.name,
        uom: item.uom,
        description: item.description,
        placeholder: item.placeholder,
        sourceType: '',
        value: {
          value: 1,
          last_update: new Date().toISOString(),
        },
      },
    };
  });

  
  res.json({
    links: {
      self: process.env.SELF_URL + req.originalUrl,
    },
    data: withAttributes,
  });
};
