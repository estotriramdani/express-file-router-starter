import { aio_iot_db } from '@/lib/db';
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

export const getLineInformation = async (table: string): Promise<StatusLine[] | null> => {
  // check the cache first
  const cached = await cache.get(`statusLine.${table}`);
  if (cached) return cached;

  const data = await aio_iot_db.$queryRawUnsafe<StatusLine[]>(`SELECT * FROM ${table}`);

  await cache.set(`statusLine.${table}`, data);

  if (!data.length) return null;

  return data;
};

export const getStatusLine = async (
  table: string
): Promise<{ value: number; last_update: string }> => {
  const data = await getLineInformation(table);

  if (!data) return { value: 0, last_update: new Date().toISOString() };

  const line = data[0];

  return {
    value: data.length,
    last_update: new Date().toISOString(),
  };
};
