import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const data = [];

      res.json({
        links: {
          self: 'https://api-aio.molca.id/overviews/productions/plan/line-al4/trends',
        },
        data: [
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-05T00:00:00.000Z',
              value: {
                actual_production: 42390,
                target_production: 248682,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-06T00:00:00.000Z',
              value: {
                actual_production: 118444,
                target_production: 143708,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-07T00:00:00.000Z',
              value: {
                actual_production: 172591,
                target_production: 36667,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-08T00:00:00.000Z',
              value: {
                actual_production: 165433,
                target_production: 40574,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-09T00:00:00.000Z',
              value: {
                actual_production: 4417,
                target_production: 140900,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-10T00:00:00.000Z',
              value: {
                actual_production: 83793,
                target_production: 73490,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-11T00:00:00.000Z',
              value: {
                actual_production: 56412,
                target_production: 3530,
                last_update: null,
              },
            },
          },
          {
            type: 'log',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-11-12T00:00:00.000Z',
              value: {
                actual_production: 169987,
                target_production: 230159,
                last_update: null,
              },
            },
          },
        ],
        included: [
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              name: 'Line AL4',
              slug: 'line-al4',
              value: {
                target_production: 1571285,
                last_update: null,
              },
            },
          },
        ],
        _meta: {
          date: {
            start: '2024-11-05T00:00:00.000Z',
            end: '2024-11-12T00:00:00.000Z',
          },
        },
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
