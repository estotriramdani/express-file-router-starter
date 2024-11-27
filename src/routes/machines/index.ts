import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/utils/db';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const data = await digital_twin_db.mst_machine.findMany();

      const transformed = data.map((item) => {
        return {
          type: 'machines',
          id: item.id,
          attributes: {
            slug: item.slug,
            name: item.name,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          },
        };
      });

      res.json({
        links,
        data: transformed,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];

export const post = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      res.json({ status: true, data: {} });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
