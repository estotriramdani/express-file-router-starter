import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';
import { dwh_db } from '@/lib/db';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      return res.json({
        links,
        data: [
          {
            type: 'lines',
            id: '1',
            attributes: {
              slug: 'warehouse-occupancy',
              name: 'Warehouse Occupancy',
              uom: '%',
              description: 'Warehouse occupancy (%)',
              sourceType: 'source',
              value: {
                value: 82,
                last_update: null,
              },
            },
          },
          {
            type: 'lines',
            id: '2',
            attributes: {
              slug: 'rak-availbility',
              name: 'Rak Availbility',
              uom: 'rak',
              description: 'Warehouse availbility (Rak)',
              sourceType: 'source',
              value: {
                value: 6,
                last_update: null,
              },
            },
          },
          {
            type: 'lines',
            id: '3',
            attributes: {
              slug: 'pallet-availbility',
              name: 'Pallet Availbility',
              uom: 'pallet',
              description: 'Warehouse availbility (Pallet)',
              sourceType: 'source',
              value: {
                value: 13,
                last_update: null,
              },
            },
          },
        ],
      });

      type Data = {
        WarehouseGroup: string;
        StockConv: number;
        Capacity: number;
        SCORE: number;
        SCORE_CONV: number;
      };

      const data = await dwh_db.$queryRaw<Data[]>`SELECT TOP (1000) [WarehouseGroup]
      ,[Stock Conv]
      ,[Capacity]
      ,[SCORE]
      ,[SCORE_CONV]
  FROM [BI_DASHBOARD].[dbo].[Tb_STOCK_BALANCE_WHOCCUPANCY_SUMMARY]
      WHERE [WarehouseGroup] = 'Sukabumi'
  `;

      if (!data.length) {
        return res.status(404).json({
          errors: [
            generateError({
              code: 404,
              title: 'Data not found',
              description: 'Data not found',
              id: generateRandomString(10),
              status: 404,
              timestamp: new Date().toISOString(),
            }),
          ],
        });
      }

      res.json({
        links,
        data: [
          {
            type: 'warehouse',
            id: '1',
            attributes: {
              slug: 'warehouse-occupancy',
              name: 'Warehouse Occupancy',
              uom: '%',
              description: 'Warehouse occupancy (%)',
              sourceType: 'source',
              value: {
                value: Math.round(data[0].SCORE * 100),
                last_update: new Date().toISOString(),
              },
            },
          },
          {
            type: 'warehouse',
            id: '2',
            attributes: {
              slug: 'rak-availbility',
              name: 'Rak availbility',
              uom: 'rak',
              description: 'Warehouse availbility (Rak)',
              sourceType: 'source',
              value: {
                value: 0,
                last_update: null,
              },
            },
          },
          {
            type: 'warehouse',
            id: '3',
            attributes: {
              slug: 'pallet-availbility',
              name: 'Pallet availbility',
              uom: 'pallet',
              description: 'Warehouse availbility (Pallet)',
              sourceType: 'source',
              value: {
                value: 0,
                last_update: null,
              },
            },
          },
        ],
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
