import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';
import { error } from 'console';
import { digital_twin_db } from '@/lib/db';
import { getLineInformation, getStatusLine } from '@/services/get-status-line';
import moment from 'moment';

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const { lineSlug } = req.params;

      if (lineSlug !== 'line-al4') {
        return res.status(404).json({
          errors: [
            generateError({
              code: 404,
              description: 'Not Found',
              id: generateRandomString(10),
              status: 404,
              timestamp: new Date().toISOString(),
              title: 'Line Not Found',
            }),
          ],
        });
      }

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const overview = await digital_twin_db.mst_overview.findFirst({
        where: {
          slug: 'line-al4',
        },
      });

      const al4 = await getLineInformation('aio_iot_oc4.v_digitalTwin_AL4');
      const al4_eff_ach = await getLineInformation('aio_iot_oc4.v_digitalTwin_AL4_eff_ach');

      const today = moment();
      const year = today.format('YYYY');
      const month = today.format('MM');

      const combined = {
        ...al4,
        ...al4_eff_ach,
      };

      const data = {
        type: 'overviews',
        id: overview.id.toString(),
        attributes: {
          slug: overview.slug,
          info: {
            description: overview.description,
            documentation_url: null,
          },
          parameters: [
            {
              type: 'line-parameters',
              id: '1',
              attributes: {
                slug: 'effisiensi',
                name: 'Effisiensi',
                uom: '%',
                description: 'Efficiency (%)',
                sourceType: 'source',
                value: {
                  value: combined.eff || 0,
                  last_update: null,
                },
              },
            },
            {
              type: 'line-parameters',
              id: '2',
              attributes: {
                slug: 'counter',
                name: 'Counter',
                uom: 'pcs',
                description: null,
                sourceType: 'source',
                value: {
                  value: combined.counter || 0,
                  last_update: null,
                },
              },
            },
            {
              type: 'line-parameters',
              id: '3',
              attributes: {
                slug: 'status',
                name: 'Status',
                uom: 'Running/Stop',
                description: 'Status [Running/Stop]',
                sourceType: 'source',
                value: {
                  value: combined.status || 0,
                  last_update: null,
                },
              },
            },
            {
              type: 'line-parameters',
              id: '4',
              attributes: {
                slug: 'rejection-count',
                name: 'Rejection Count',
                uom: 'pcs',
                description: null,
                sourceType: 'source',
                value: {
                  value: combined.reject || 0,
                  last_update: null,
                },
              },
            },
            {
              type: 'line-parameters',
              id: '5',
              attributes: {
                slug: 'gas',
                name: 'Gas',
                uom: 'unknown',
                description: null,
                sourceType: 'source',
                value: {
                  value: 4,
                  last_update: null,
                },
              },
            },
            {
              type: 'line-parameters',
              id: '6',
              attributes: {
                slug: 'electricity',
                name: 'Electricity',
                uom: 'kWh',
                description: null,
                sourceType: 'source',
                value: {
                  value: 4,
                  last_update: null,
                },
              },
            },
            {
              type: 'line-parameters',
              id: '7',
              attributes: {
                slug: 'downtime-line',
                name: 'Downtime Line',
                uom: 'duration',
                description: null,
                sourceType: 'source',
                value: {
                  value: combined.downtime || 0,
                  last_update: null,
                },
              },
            },
          ],
        },
      };

      res.json({
        links,
        data,
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
