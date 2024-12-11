import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';
import { df_db, dwh_db } from '@/lib/db';
import moment from 'moment';
import { getFinishGoodWithPlan } from '@/services/get-finish-good';

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

      const sevenDaysBefore = moment().subtract(7, 'days').format('YYYY-MM-DD 00:00:00');
      const sevenDaysAfter = moment().add(7, 'days').format('YYYY-MM-DD 23:59:59');

      const combined = await getFinishGoodWithPlan(sevenDaysBefore, sevenDaysAfter);

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
            start: new Date(sevenDaysBefore).toISOString(),
            end: new Date(sevenDaysAfter).toISOString(),
          },
        },
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
