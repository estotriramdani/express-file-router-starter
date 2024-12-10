import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/lib/db';
import { boiler12tphStatus, getDataParameters } from '@/lib/data-fetcher';
import { IParameterResult } from '@/types/response';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const { machineSlug, functionSlug } = req.params;

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const data = await digital_twin_db.mst_machine_parameter.findMany({
        where: {
          machine_slug: machineSlug,
          mst_function_slug: functionSlug,
        },
      });

      if (data.length === 0) {
        return res.status(404).json({
          errors: [
            generateError({
              code: 404,
              description: 'Parameter not found',
              id: generateRandomString(10),
              status: 404,
              title: 'Parameter not found',
              timestamp: new Date().toISOString(),
            }),
          ],
        });
      }

      const dataParameters = await Promise.all(
        data.map(async (params) => {
          let data = await getDataParameters(params);

          if (params.slug === 'boiler-12tph-status') {
            data = await boiler12tphStatus(params);
          }

          const restructured: IParameterResult = {
            type: 'parameters',
            id: data.id,
            attributes: { ...data, placeholder: params.placeholder },
          };
          return restructured;
        })
      );

      res.json({ links, data: dataParameters });
    } catch (error) {
      console.log(error);
      catchResponse(res, error);
    }
  },
];
