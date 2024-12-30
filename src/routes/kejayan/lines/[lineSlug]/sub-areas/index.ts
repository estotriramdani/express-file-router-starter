import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { catchResponse } from '@/utils/response';
import { digital_twin_db } from '@/lib/db';
import { getStatusLineKjy } from '@/services/get-status-line';

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      let dataLine: any;
      if (req.params.lineSlug.includes('1')) {
        dataLine = await getStatusLineKjy('aio_iot_oci1.v_digital_twin');
      } else if (req.params.lineSlug.includes('2')) {
        dataLine = await getStatusLineKjy('aio_iot_oci2.v_digital_twin');
      }

      const data = await digital_twin_db.mst_overview.findMany({
        where: {
          area: 'PRODUCTION_KJY' as any,
          slug: {
            startsWith: `${req.params.lineSlug}-`, // Filters slugs starting with "line-oc1-"
          },
        }
      });

      const newData: any[] = [];

      for (let i = 0; i < data.length; i++) {
        const element: Record<string, any> = { ...data[i] };
        element.value = { value: dataLine.value[0]?.status === 'PRODUCTION' ? 1 : 0, last_update: dataLine.last_update }
        newData.push(element);
      }

      const withAttributes = newData
        .map((item) => {
          return {
            type: 'line-sub-areas',
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
