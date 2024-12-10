import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { catchResponse } from '@/utils/response';
import { getStatusLine } from '@/services/get-status-line';
import { digital_twin_db } from '@/lib/db';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const al4 = await getStatusLine('aio_iot_oc4.v_digitalTwin_AL4');

      const data = await digital_twin_db.mst_overview.findMany({
        where: {
          area: 'PRODUCTION',
        },
      });

      const newData: any[] = [];

      for (let i = 0; i < data.length; i++) {
        const element: Record<string, any> = { ...data[i] };
        if (data[i].slug === 'line-al4') {
          element.value = al4;
        }
        newData.push(element);
      }

      const withAttributes = newData
        .filter((item) => !!item.value)
        .map((item) => {
          return {
            type: 'overview',
            id: item.id,
            attributes: {
              slug: item.slug,
              name: item.name,
              uom: item.uom,
              description: item.description,
              placeholder: item.placeholder,
              sourceType: item.sourceType,
              value: item.value,
            },
          };
        });

      res.json({
        links: links,
        data: withAttributes,
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
