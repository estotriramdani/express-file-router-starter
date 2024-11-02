import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { iot_data_raw_db } from '@/utils/db';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const result = await iot_data_raw_db.equipment_efficiency_results.findFirst({
        where: {
          node_desc: 'Comb. Eff. Boiler 12 TPH',
        },
      });
      res.json({ result });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
