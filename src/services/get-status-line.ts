import { aio_iot_db, aio_iot_oci1, node_red_kjy } from '@/lib/db';
import { cache } from './cache';

/* 
startTime
eff
counter
status
reject
downtime
ach
*/

type StatusLine = {
  lotnot: string;
  pro: string;
  startTime: Date;
  endTime: Date;
  eff: number;
  counter: number;
  status: 1 | 0;
  reject: number;
  downtime: number;
  ach: number;
};

export const getLineInformation = async (table: string): Promise<StatusLine | null> => {
  // check the cache first
  const cached: any = await cache.get(`statusLine.${table}`);

  if (cached) {
    if (cached.length) return cached[0];
    return cached;
  }

  const data = await aio_iot_db.$queryRawUnsafe<StatusLine[]>(`SELECT * FROM ${table}`);

  await cache.set(`statusLine.${table}`, data);

  if (!data.length) return null;

  return data[0];
};

export const getLineInformationKjy = async (
  table: string,
  db: string
): Promise<StatusLine | null> => {
  // check the cache first
  // const cached: any = await cache.get(`statusLine.${table}`);
  // if (cached) return cached;

  let data: any;

  if (db === 'aio_iot_oci1') {
    data = await aio_iot_oci1.$queryRawUnsafe<any[]>(`SELECT * FROM ${table}`);
  } else {
    data = await node_red_kjy.$queryRawUnsafe<any[]>(`
      SELECT
        Normal_mode,
        h2o2_mode,
        csiop_mode,
        new_h2o2_room,
        idle_mode,
        room_pressure,
        (SELECT Cycle_Time FROM cttn_injeksi1 ORDER BY epochtime DESC LIMIT 1) AS Cycle_Time,
        (SELECT Speed_Label FROM label_oci1 ORDER BY epochtime DESC LIMIT 1) AS Speed_Label,
        (SELECT lblchecker_total_ng FROM cttn_rejectionoc1 ORDER BY epochtime DESC LIMIT 1) AS lblchecker_total_ng
      FROM
        hvac1 
      ORDER BY
        epochtime DESC 
        LIMIT 1 
      `);
  }

  await cache.set(`statusLine.${table}`, data);

  if (!data.length) return null;

  return data[0];
};

export const getStatusLine = async (
  table: string
): Promise<{ value: number; last_update: string }> => {
  const data = await getLineInformation(table);

  if (!data) return { value: 0, last_update: new Date().toISOString() };

  return {
    value: typeof data.status === 'number' ? data.status : data ? 1 : 0,
    last_update: new Date().toISOString(),
  };
};

export const getStatusLineKjy = async (
  table: string,
  db: string = 'aio_iot_oci1'
): Promise<any> => {
  const data = await getLineInformationKjy(table, db);

  if (!data) return { value: 0, last_update: new Date().toISOString() };

  return {
    value: data,
    last_update: new Date().toISOString(),
  };
};
