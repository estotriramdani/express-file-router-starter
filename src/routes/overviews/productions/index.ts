import { aio_iot_db } from '@/lib/db';
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

      const can = await getStatusLine('aio_iot_can.v_digitalTwin_CAN');
      const sachet = await getStatusLine('aio_iot_sachet.v_digitalTwin_SACHET');
      const pet2 = await getStatusLine('aio_iot_pet.v_digitalTwin_PET');
      // const enmix = await getStatusLine('aio_iot_pet.v_digitalTwin_PET');
      const nami = await getStatusLine('aio_iot_nami.v_digitalTwin_GBL');
      const oc3 = await getStatusLine('aio_iot.v_digitalTwin_OCI3');
      const al4 = await getStatusLine('aio_iot_oc4.v_digitalTwin_AL4');

      res.json({
        links: links,
        data: [
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              uom: 'Running/Stop',
              description: null,
              placeholder: 1,
              sourceType: 'source',
              value: can,
            },
          },
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              uom: 'Running/Stop',
              description: null,
              placeholder: 2,
              sourceType: 'source',
              value: sachet,
            },
          },
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet',
              name: 'Line PET',
              uom: 'Running/Stop',
              description: null,
              placeholder: 3,
              sourceType: 'source',
              value: pet2,
            },
          },
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              uom: 'Running/Stop',
              description: null,
              placeholder: 4,
              sourceType: 'source',
              value: {
                value: 0,
                last_update: null,
              },
            },
          },
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              uom: 'Running/Stop',
              description: null,
              placeholder: 5,
              sourceType: 'source',
              value: nami,
            },
          },
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              uom: 'Running/Stop',
              description: null,
              placeholder: 6,
              sourceType: 'source',
              value: oc3,
            },
          },
          {
            type: 'lines',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              uom: 'Running/Stop',
              description: null,
              placeholder: 7,
              sourceType: 'source',
              value: al4,
            },
          },
        ],
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
