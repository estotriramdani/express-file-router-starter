import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/utils/db';
import { getDataParameters } from '@/lib/data-fetcher';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const { machine } = req.params;
      const data = await digital_twin_db.mst_machine_parameter.findMany({
        where: {
          machine_slug: machine,
        },
      });

      const dataParameters = await Promise.all(
        data.map(async (params) => {
          const data = await getDataParameters(params);
          return data;
        })
      );

      res.json({ status: true, data: dataParameters });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
];
