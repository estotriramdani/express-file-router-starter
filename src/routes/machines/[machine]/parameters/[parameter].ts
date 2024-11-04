import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/utils/db';
import { getDataParameters } from '@/lib/data-fetcher';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const { machine, parameter } = req.params;
      const data = await digital_twin_db.mst_machine_parameter.findFirst({
        where: {
          machine_slug: machine,
          slug: parameter,
        },
      });

      if (!data) {
        return res.status(404).json({ status: false, message: 'Parameter not found' });
      }

      const result = await getDataParameters(data);

      res.json({ status: true, data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
];
