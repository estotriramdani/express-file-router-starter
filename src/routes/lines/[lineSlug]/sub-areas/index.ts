import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { catchResponse } from '@/utils/response';
import { digital_twin_db } from '@/lib/db';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const result = await digital_twin_db.mst_line_subarea.findMany({
        where: {
          line_slug: req.params.lineSlug,
        },
      });

      res.json({
        links,
        data: result,
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
