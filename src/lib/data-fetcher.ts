import type { mst_machine_parameter } from '@/generated/digital_twin_db';
import { aveva_historian_db, iot_data_raw_db } from '@/utils/db';
import moment from 'moment';

const boiler12tphStatus = async (currentErr: number) => {
  // boiler-12tph-status
}

export const getDataParameters = async (params: mst_machine_parameter) => {
  const baseObject = {
    id: params.id,
    name: params.name,
    slug: params.slug,
    description: params.description,
    uom: params.uom,
    sourceType: params.sourceType,
  };

  if (params.sourceType === 'iot_data_raw') {
    if (!params.iotDataRawQuery)
      return {
        ...baseObject,
        value: {
          value: null,
          last_update: null,
        },
      };

    const value = await iot_data_raw_db.$queryRawUnsafe<Record<string, any>[]>(
      params.iotDataRawQuery
    );

    if (value.length === 0) {
      return {
        ...baseObject,
        value: {
          value: null,
          last_update: null,
        },
      };
    }

    return {
      ...baseObject,
      value: {
        value: value[0]?.[params?.valueKey || 'value'],
        last_update: value[0]?.[params?.timestampKey || 'created_at'],
      },
    };
  }

  if (params.sourceType === 'aveva') {
    if (!params.avevaTag) {
      return {
        ...baseObject,
        value: {
          value: null,
          last_update: null,
        },
      };
    }

    const endDate = moment().startOf('hour').format('YYYY-MM-DD HH:mm:ss');
    const startDate = moment().subtract(1, 'hour').startOf('hour').format('YYYY-MM-DD HH:mm:ss');

    type Aveva = { TagName: string; DateTime: string; Value: number };
    const data = await aveva_historian_db.$queryRaw<Aveva[]>`SET NOCOUNT ON
  DECLARE @StartDate DateTime
  DECLARE @EndDate DateTime
  DECLARE @RowCount INT
  SET @StartDate = ${startDate}
  SET @EndDate = ${endDate}
  SET @RowCount = 1
  SET NOCOUNT OFF
  SELECT 
      TagName = v_History.TagName,
      DateTime = convert(nvarchar, DateTime, 21),
      Value = v_History.vValue,
      Quality,
      QualityDetail = v_History.QualityDetail,
      QualityString
  FROM [Runtime].[dbo].[v_History], [Runtime].[dbo].[QualityMap]
  WHERE v_History.TagName IN (${params.avevaTag})
      AND Quality = 0
      AND wwVersion = 'Latest'
      AND wwRetrievalMode = 'Cyclic'
      AND wwRowCount = @RowCount
      AND QualityMap.QualityDetail = v_History.QualityDetail
      AND DateTime >= @StartDate
      AND DateTime <= @EndDate
  ORDER BY DateTime DESC`;

    if (data.length === 0) {
      return {
        ...baseObject,
        value: {
          value: null,
          last_update: null,
        },
      };
    }

    if (data.length === 1 || !params.isConsumption) {
      return {
        ...baseObject,
        value: {
          value: +data[0].Value,
          last_update: data[0].DateTime,
        },
      };
    }

    if (data.length > 1) {
      const firstData = data[0];
      const lastData = data[1];
      const value = firstData.Value - lastData.Value;
      const last_update = lastData.DateTime;

      return {
        ...baseObject,
        value: {
          value,
          last_update,
        },
      };
    }
  }

  return {
    ...baseObject,
    value: {
      value: null,
      last_update: null,
    },
  };
};
