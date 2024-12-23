import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
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
        dataLine = await getStatusLineKjy('aio_iot_oci1.mst_prodidentity');
      } else if (req.params.lineSlug.includes('2')) {
        dataLine = await getStatusLineKjy('aio_iot_oci2.mst_prodidentity');
      }

      const data = await digital_twin_db.mst_line_subarea_equipment.findMany({
        where: {
          line_slug: req.params.lineSlug,
          subarea_slug: req.params.subAreaSlug,
        },
      });

      const newData: any[] = [];

      for (let i = 0; i < data.length; i++) {
        const element: Record<string, any> = { ...data[i] };
        element.value = dataLine
        newData.push(element);
      }

      const withAttributes = newData
      .map((item) => {
        return {
          type: 'product-equipments',
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
