import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/lib/db';
import { getDataParameters } from '@/lib/data-fetcher';
import { generateError, generateRandomString } from '@/utils';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const { machineSlug, parameterSlug, functionSlug } = req.params;
      const data = await digital_twin_db.mst_machine_parameter.findFirst({
        where: {
          machine_slug: machineSlug,
          slug: parameterSlug,
          mst_function_slug: functionSlug,
          hasTrend: true,
        },
      });

      if (!data) {
        return res.status(404).json({
          errors: [
            generateError({
              code: 404,
              description: 'Parameter not found or does not have trend',
              id: generateRandomString(10),
              status: 404,
              title: 'Parameter not found or does not have trend',
              timestamp: new Date().toISOString(),
            }),
          ],
        });
      }

      const result = await getDataParameters(data);

      res.json({ status: true, data: result });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          errors: [
            generateError({
              code: 500,
              description: error?.message || 'Internal Server Error',
              id: generateRandomString(10),
              status: 500,
              title: 'Internal Server Error',
              timestamp: new Date().toISOString(),
            }),
          ],
        });
    }
  },
];
