import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { df_db, digital_twin_db, iot_data_raw_db } from '@/lib/db';
import { generateError, generateRandomString, getDateRange } from '@/utils';
import { generateTrendQueryEquipmentEff, TimeUnit } from '@/utils/query';
import { catchResponse } from '@/utils/response';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const { machineSlug, parameterSlug, functionSlug } = req.params;
      const { unit } = req.query;

      const data = await digital_twin_db.mst_machine_parameter.findFirst({
        where: {
          machine_slug: machineSlug,
          slug: parameterSlug,
          // mst_function_slug: functionSlug,
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

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const filterDate = getDateRange(req.query.filter_date as string);

      let responseData: { x: number; y: string }[] = [];

      if (
        data.sourceType === 'iot_data_raw' &&
        data.tableName === 'equipment_efficiency_results' &&
        data.node_desc
      ) {
        const query = generateTrendQueryEquipmentEff({
          aggregate: 'AVG',
          startTime: filterDate.startDate,
          endTime: filterDate.endDate,
          nodeDesc: data.node_desc,
          unit: (unit || filterDate.unit) as TimeUnit,
          db: 'iot_data_raw',
        });

        responseData = await iot_data_raw_db.$queryRawUnsafe<{ x: number; y: string }[]>(query);
      }

      if (data.sourceType === 'aveva' && data.avevaTag && data.availableInDynamicForm) {
        const tableId = data.avevaTag.split('_')[0];

        const formDetail = await df_db.mst_form.findFirst({
          where: {
            id: +tableId,
          },
        });

        const query = generateTrendQueryEquipmentEff({
          aggregate: 'SUM',
          startTime: filterDate.startDate,
          endTime: filterDate.endDate,
          nodeDesc: data.node_desc,
          unit: (unit || filterDate.unit) as TimeUnit,
          db: 'aio_iot_engineering',
          tableName: formDetail.table_name.toLowerCase(),
          columnName: data.avevaTag.replace(`${tableId}_`, ''),
        });

        responseData = await df_db.$queryRawUnsafe<{ x: number; y: string }[]>(query);
      }

      return res.json({
        links,
        data: responseData.map((item) => {
          return {
            type: 'logs',
            attributes: item,
          };
        }),
      });
    } catch (error) {
      console.log(error);
      catchResponse(res, error);
    }
  },
];
