import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';
import { error } from 'console';
import { digital_twin_db, iot_data_raw_db } from '@/lib/db';
import { getLineInformationKjy, getStatusLine, getStatusLineKjy } from '@/services/get-status-line';
import moment from 'moment';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const { lineSlug } = req.params;

      if (lineSlug !== 'line-oc1' && lineSlug !== 'line-oc2') {
        return res.status(404).json({
          errors: [
            generateError({
              code: 404,
              description: 'Not Found',
              id: generateRandomString(10),
              status: 404,
              timestamp: new Date().toISOString(),
              title: 'Line Not Found',
            }),
          ],
        });
      }

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };
      
      const line = lineSlug === 'line-oc1' ? '1' : '2';
      const lineInfo = await getStatusLineKjy(`aio_iot_oci${line}.v_digital_twin`);
      const nodeRedInfo = await getStatusLineKjy(`node_red.v_digital_twin_oci${line}`, 'node_red_kjy');
      console.log(nodeRedInfo);
      

      const overview = await digital_twin_db.mst_overview.findFirst({
        where: {
          slug: 'line-oc1',
        },
      });

      const lineParammeters = await digital_twin_db.mst_line_parameter.findMany({
        where: {
          line_slug: 'line-oc1',
        },
      });
      
      // console.log(nodeRedInfo);
      

      const parameters = lineParammeters.map((x: any) => {
        console.log(x.db_var);
        console.log(x.column_value);
        const infoData = x.db_var === 'aio_iot_oci1' ? lineInfo : nodeRedInfo;

        console.log(infoData.value[x.column_value]);

        if (x.column_value === 'status' && infoData.value[x.column_value] === 'PRODUCTION') {
          infoData.value[x.column_value] = 1;
        } else {
          infoData.value[x.column_value] = 0;
        }
        

        return {
          "type": "line-parameters",
          "id": x.id,
          "attributes": {
            "slug": x.slug,
            "name": x.name,
            "uom": x.uom,
            "description": x.description,
            "sourceType": x.sourceType,
            "value": {
              "value": infoData.value[x.column_value],
              "last_update": new Date().toISOString()
            }
          }
        }
      });

      const data = {
        type: 'overviews',
        id: overview.id.toString(),
        attributes: {
          slug: overview.slug,
          info: {
            description: overview.description,
            documentation_url: null,
          },
          parameters: parameters
        },
      };

      res.json({
        links,
        data,
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
