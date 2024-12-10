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
        /* 
        line-can
        line-sachet
        line-pet2
        line-enmix
        line-glass-bottle
        line-oc3
        line-al4
        line-al4-preparation
        line-al4-ibf
        line-al4-packing
        */
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
        // data: [
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajz6',
        //     attributes: {
        //       slug: 'line-can',
        //       name: 'Line CAN',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 1,
        //       sourceType: 'source',
        //       value: can,
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajx7',
        //     attributes: {
        //       slug: 'line-sachet',
        //       name: 'Line Sachet',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 2,
        //       sourceType: 'source',
        //       value: sachet,
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajx8',
        //     attributes: {
        //       slug: 'line-pet',
        //       name: 'Line PET',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 3,
        //       sourceType: 'source',
        //       value: pet2,
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajx6',
        //     attributes: {
        //       slug: 'line-enmix',
        //       name: 'Line ENMIX',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 4,
        //       sourceType: 'source',
        //       value: {
        //         value: 0,
        //         last_update: null,
        //       },
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajx5',
        //     attributes: {
        //       slug: 'line-glass-bottle',
        //       name: 'Line Glass Bottle',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 5,
        //       sourceType: 'source',
        //       value: nami,
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajx9',
        //     attributes: {
        //       slug: 'line-oc3',
        //       name: 'Line OC3',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 6,
        //       sourceType: 'source',
        //       value: oc3,
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajx4',
        //     attributes: {
        //       slug: 'line-al4',
        //       name: 'Line AL4',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 7,
        //       sourceType: 'source',
        //       value: al4,
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajxz',
        //     attributes: {
        //       slug: 'line-al4-preparation',
        //       name: 'Preparation',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 8,
        //       sourceType: 'source',
        //       value: {
        //         value: 1,
        //         last_update: null,
        //       },
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajxx',
        //     attributes: {
        //       slug: 'line-al4-ibf',
        //       name: 'IBF',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 9,
        //       sourceType: 'source',
        //       value: {
        //         value: 1,
        //         last_update: null,
        //       },
        //     },
        //   },
        //   {
        //     type: 'lines',
        //     id: 'cm32etjpp0002hiohtaqoajxc',
        //     attributes: {
        //       slug: 'line-al4-packing',
        //       name: 'Packing',
        //       uom: 'Running/Stop',
        //       description: null,
        //       placeholder: 10,
        //       sourceType: 'source',
        //       value: {
        //         value: 1,
        //         last_update: null,
        //       },
        //     },
        //   },
        // ],
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
