import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { catchResponse } from '@/utils/response';
import { digital_twin_db } from '@/lib/db';

interface Attribute {
  slug: string;
  name: string;
  uom: string;
  description?: any;
  placeholder: number;
  sourceType: string;
  value: {
    value: number;
    last_update?: any;
  };
}

interface RootObject {
  type: string;
  id: string;
  attributes: Attribute;
}

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const data = await digital_twin_db.mst_line_subarea.findMany({
        where: {
          line_slug: req.params.lineSlug,
        },
      });

      const mapped: RootObject[] = [];

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        mapped.push({
          id: element.id.toString(),
          type: 'line-sub-areas',
          attributes: {
            name: element.name,
            placeholder: element.placeholder,
            slug: element.slug,
            sourceType: element.sourceType,
            uom: element.uom,
            value: {
              value: 1,
              last_update: new Date().toISOString(),
            },
          },
        });
      }

      res.json({ links, data: mapped });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
