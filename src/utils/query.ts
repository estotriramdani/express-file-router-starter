export type AggregateFunction = 'MAX' | 'MIN' | 'AVG' | 'SUM';
export type TimeUnit = 'hourly' | 'daily' | 'monthly';

type TrendQueryEquipmentEffParams = {
  nodeDesc: string;
  startTime: string;
  endTime: string;
  aggregate: AggregateFunction;
  unit: TimeUnit;
} & ({ db: 'iot_data_raw' } | { db: 'aio_iot_engineering'; tableName: string; columnName: string });

/**
 * @description Generate a query to fetch trend data
 * for equipment efficiency which is stored in the
 * `iot_data_raw.equipment_efficiency_results` table
 * or database aio_iot_engineering.
 */
export function generateTrendQueryEquipmentEff(params: TrendQueryEquipmentEffParams): string {
  const { nodeDesc, startTime, endTime, aggregate, unit, db } = params;

  let dateFormat: string;
  let groupBy: string;
  let orderBy: string;
  const timeColumn = (() => {
    if (db === 'iot_data_raw') return 'created_at';
    if (db === 'aio_iot_engineering') return 'tanggal_cek';
    return 'createdAt';
  })();

  switch (unit) {
    case 'hourly':
      dateFormat = '%Y-%m-%d %H:00:00';
      groupBy = `DATE_FORMAT(${timeColumn}, '%Y-%m-%d %H:00:00')`;
      orderBy = 'x';
      break;
    case 'daily':
      dateFormat = '%Y-%m-%d';
      groupBy = `DATE(${timeColumn})`;
      orderBy = 'x';
      break;
    case 'monthly':
      dateFormat = '%Y-%m-01';
      groupBy = `DATE_FORMAT(${timeColumn}, '%Y-%m-01')`;
      orderBy = 'x';
      break;
    default:
      throw new Error('Invalid time unit');
  }

  if (db === 'aio_iot_engineering') {
    return `SELECT
              DATE_FORMAT(tanggal_cek, '${dateFormat}') AS x,
              SUM(${params.columnName}) AS y
            FROM
              ${params.tableName}
            WHERE
              tanggal_cek BETWEEN '${startTime}'
              AND '${endTime}'
            GROUP BY
              DATE(tanggal_cek)
            ORDER BY
              x;`;
  }

  return `
        SELECT
            DATE_FORMAT(created_at, '${dateFormat}') AS ${orderBy},
            ${aggregate}(value) AS y
        FROM
            equipment_efficiency_results
        WHERE
            equipment_efficiency_results.node_desc = '${nodeDesc}'
            AND equipment_efficiency_results.created_at BETWEEN '${startTime}' AND '${endTime}'
        GROUP BY ${groupBy}
        ORDER BY
            ${orderBy};
    `;
}

// Example usage:
// const query = generateTrendQuery(
//     'Comb. Eff. Boiler 12 TPH',
//     '2024-11-27 00:00:00',
//     '2024-11-28 00:00:00',
//     'AVG',
//     'hourly'
// );
