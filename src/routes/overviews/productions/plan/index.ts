import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString, generateWeeks } from '@/utils';
import { catchResponse } from '@/utils/response';
import { df_db, dwh_db } from '@/lib/db';
import moment from 'moment';
import { getFinishGoodWithPlan } from '@/services/get-finish-good';
import { allLines } from '@/constants';

interface ResponseDataFinishGood {
  type: string;
  id: string;
  attributes: {
    slug: string;
    name: string;
    date: string;
    value: {
      actual_production: number;
      target_production: number;
      last_update?: any;
    };
  };
}

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const { unit } = req.query;

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      if (unit === 'monthly') {
        const finalData: ResponseDataFinishGood[] = [];
        const weeks = generateWeeks(moment().format('YYYY-MM-DD'));
        for (let i = 0; i < weeks.length; i++) {
          const { start, end } = weeks[i];
          const combined = await getFinishGoodWithPlan(start, end);
          allLines.forEach((line) => {
            let actual_production = 0;
            let target_production = 0;
            const filtered = combined.filter((item) => item.slug === line.slug);
            filtered.forEach((item) => {
              actual_production += item.actual_production;
              target_production += item.target_production;
            });
            finalData.push({
              type: 'production-plan',
              id: `${line.slug}_${start}`,
              attributes: {
                slug: line.slug,
                name: line.name,
                date: start,
                value: {
                  actual_production,
                  target_production,
                  last_update: null,
                },
              },
            });
          });
        }

        res.json({
          links,
          data: finalData,
          _meta: {
            date: {
              start: weeks[0].start,
              end: weeks[weeks.length - 1].end,
            },
          },
        });
      }

      const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD 00:00:00');
      const endDate = moment().add(8, 'days').format('YYYY-MM-DD 23:59:59');

      const combined = await getFinishGoodWithPlan(startDate, endDate);

      const finalData: ResponseDataFinishGood[] = combined.map((item) => {
        const isAfter = moment(item.date).isAfter(moment());
        return {
          type: isAfter ? 'production-plan-target' : 'production-plan',
          id: item.id,
          attributes: {
            slug: item.slug,
            name: item.name,
            date: new Date(item.date).toISOString(),
            value: {
              actual_production: item.actual_production,
              target_production: item.target_production,
              last_update: null,
            },
          },
        };
      });

      res.json({
        links,
        data: finalData,
        _meta: {
          date: {
            start: new Date(startDate).toISOString(),
            end: new Date(endDate).toISOString(),
          },
        },
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
