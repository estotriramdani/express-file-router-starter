import { dwh_db } from '@/lib/db';

export const biDashboardQuery = async (query: string) => {
  const data = await dwh_db.$queryRawUnsafe(query);
  
  return data;
};
