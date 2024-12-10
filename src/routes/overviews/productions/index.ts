import { aio_iot_db, digital_twin_db } from '@/lib/db';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { getStatusLine } from '@/services/get-status-line';
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
      const oc3 = await getStatusLine('aio_iot.v_digitalTwin_OCI3');
      const al4 = await getStatusLine('aio_iot_oc4.v_digitalTwin_AL4');
      const can = await getStatusLine('aio_iot_can.v_digitalTwin_CAN');
      const sachet = await getStatusLine('aio_iot_sachet.v_digitalTwin_SACHET');
      const nami = await getStatusLine('aio_iot_nami.v_digitalTwin_GBL');
      const pet2 = await getStatusLine('aio_iot_pet.v_digitalTwin_PET');

      const data = await digital_twin_db.mst_overview.findMany({
        where: {
          area: 'PRODUCTION',
        },
      });

      const newData: any[] = [];
      
      for (let i = 0; i < data.length; i++) {
        const element: Record<string, any> = {...data[i]};
        if (data[i].slug === 'line-can') {
          element.value = can;
        }
        if (data[i].slug === 'line-sachet') {
          element.value = sachet;
        }
        if (data[i].slug === 'line-pet') {
          element.value = pet2;
        }
        if (data[i].slug === 'line-enmix') {
          element.value = {
            value: 0,
            last_update: null,
          };
        }
        if (data[i].slug === 'line-glass-bottle') {
          element.value = nami;
        }
        if (data[i].slug === 'line-oc3') {
          element.value = oc3;
        }
        if (data[i].slug === 'line-al4') {
          element.value = al4;
        }
        if (data[i].slug === 'line-al4-preparation') {
          element.value = {
            value: 0,
            last_update: null,
          };
        }
        if (data[i].slug === 'line-al4-ibf') {
          element.value = {
            value: 0,
            last_update: null,
          };
        }
        if (data[i].slug === 'line-al4-packing') {
          element.value = {
            value: 0,
            last_update: null,
          };
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
