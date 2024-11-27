export type AggregateFunction = 'MAX' | 'MIN' | 'AVG';
export type TimeUnit = 'hourly' | 'daily' | 'monthly';

export function generateTrendQueryEquipmentEff({
  nodeDesc,
  startTime,
  endTime,
  aggregate,
  unit,
}: {
  nodeDesc: string;
  startTime: string;
  endTime: string;
  aggregate: AggregateFunction;
  unit: TimeUnit;
}): string {
  let dateFormat: string;
  let groupBy: string;
  let orderBy: string;

  switch (unit) {
    case 'hourly':
      dateFormat = '%Y-%m-%d %H:00:00';
      groupBy = "DATE_FORMAT(created_at, '%Y-%m-%d %H:00:00')";
      orderBy = 'x';
      break;
    case 'daily':
      dateFormat = '%Y-%m-%d';
      groupBy = 'DATE(created_at)';
      orderBy = 'x';
      break;
    case 'monthly':
      dateFormat = '%Y-%m-01';
      groupBy = "DATE_FORMAT(created_at, '%Y-%m-01')";
      orderBy = 'x';
      break;
    default:
      throw new Error('Invalid time unit');
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
