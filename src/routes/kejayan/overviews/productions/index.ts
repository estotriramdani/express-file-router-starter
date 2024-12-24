import { aio_iot_db, digital_twin_db } from '@/lib/db';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { getStatusLine, getStatusLineKjy } from '@/services/get-status-line';
import { catchResponse } from '@/utils/response';
import type { Request, Response } from 'express';

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      // const enmix = await getStatusLine('aio_iot_pet.v_digitalTwin_PET');
      const oc1 = await getStatusLineKjy('aio_iot_oci1.v_digital_twin');
      const oc2 = await getStatusLineKjy('aio_iot_oci2.v_digital_twin');

      const data = await digital_twin_db.mst_overview.findMany({
        where: {
          area: 'PRODUCTION_KJY',
        },
      });

      const newData: any[] = [];
      
      for (let i = 0; i < data.length; i++) {
        const element: Record<string, any> = {...data[i]};
        if (data[i].slug === 'line-oc1') {
          element.value = { value: oc1.value?.status === 'PRODUCTION' ? 1 : 0, last_update: oc1.last_update };
        }
        if (data[i].slug === 'line-oc2') {
          element.value = { value: oc2.value?.status === 'PRODUCTION' ? 1 : 0, last_update: oc1.last_update };
        }
        if (data[i].slug === 'line-oc1-ibf') {
          element.value = { value: oc1.value?.status === 'PRODUCTION' ? 1 : 0, last_update: oc1.last_update };
        }
        if (data[i].slug === 'line-oc1-packing') {
          element.value = { value: oc1.value?.status === 'PRODUCTION' ? 1 : 0, last_update: oc1.last_update };
        }
        newData.push(element);
      }

      const withAttributes = newData.map((item) => {
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
        data: withAttributes
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
