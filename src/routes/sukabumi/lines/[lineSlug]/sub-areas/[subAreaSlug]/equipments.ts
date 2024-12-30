import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';
import { mst_line_subarea_equipment } from '@/generated/digital_twin_db';
import { al4Prep } from './data';
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

      const dataFull: RootObject[] = [];

      const data = await digital_twin_db.mst_line_subarea_equipment.findMany({
        where: {
          line_slug: req.params.lineSlug,
          subarea_slug: req.params.subAreaSlug,
        },
      });

      data.forEach((item) => {
        dataFull.push({
          type: 'product-equipments',
          id: item.id.toString(),
          attributes: {
            name: item.name,
            placeholder: item.placeholder,
            slug: item.slug,
            sourceType: item.sourceType,
            uom: item.uom,
            description: item.description,
            value: {
              value: 1,
              last_update: new Date(),
            },
          },
        });
      });

      res.json({ links, data: dataFull });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
