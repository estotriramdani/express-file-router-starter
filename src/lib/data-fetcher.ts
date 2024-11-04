import type { mst_machine_parameter } from '@/generated/digital_twin_db';
import { iot_data_raw_db } from '@/utils/db';

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
    if (!params.iotDataRawQuery) return 0;

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
        value: value[0]?.[params.valueKey],
        last_update: value[0]?.[params.timestampKey],
      },
    };
  }

  return {
    ...baseObject,
    value: {
      value: null,
      last_update: null,
    },
  };
};
