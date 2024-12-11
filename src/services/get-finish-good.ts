import { allLines, mappingFactoryLineDF, mappingFactoryLineTableau } from '@/constants';
import { df_db, dwh_db } from '@/lib/db';
import { datesBetween, generateDatesBetween } from '@/utils';
import moment from 'moment';

export const getFinishGoodWithPlan = async (startDate: string, endDate: string) => {
  const whereDate = datesBetween(startDate, endDate);

  let factoryLine =
    "AND [FACTORY LINE] IN ('PET2', 'OC4', 'CAN', 'SACHET', 'OC 4', 'OC 3', 'OHOT', 'GLASS BOTTLE')";

  type Plan = {
    DATE: string;
    FACTORY_LINE: string;
    TOTAL_PLAN_FG: number;
    TOTAL_FINISH_GOOD: number;
  };

  const plan = await dwh_db.$queryRawUnsafe<Plan[]>(`SELECT 
          [DATE],
          [FACTORY LINE] AS FACTORY_LINE,
          SUM([PLAN FG]) AS TOTAL_PLAN_FG
        FROM 
          [Tb_DAILY_EXCEL_PPIC_PLAN_FG]
        WHERE 
          [FACTORY] = 'SUKABUMI'
          AND [PLAN FG] > 0
          ${whereDate}
          ${factoryLine}
        GROUP BY 
          [DATE],
          [FACTORY LINE]
        ORDER BY [DATE] DESC
      `);

  const whereTanggalCek = `tanggal_cek BETWEEN '${startDate}' AND '${endDate}'`;

  const finishGood = await df_db.$queryRawUnsafe<Plan[]>(`SELECT 
          tanggal_cek AS DATE,
          factory_line AS FACTORY_LINE,
          SUM(finish_good) AS TOTAL_FINISH_GOOD
        FROM 
          103_finish_good
        WHERE
          ${whereTanggalCek}
        GROUP BY 
          tanggal_cek,
          factory_line
      `);

  type Data = {
    id: string;
    date: string;
    slug: string;
    name: string;
    target_production?: number;
    actual_production?: number;
  };

  const mapDataPlan: Record<string, Data> = plan
    .map((item) => {
      const mapped = mappingFactoryLineTableau[item.FACTORY_LINE];
      return {
        id: `${mapped.slug}_${moment(item.DATE).format('YYYY-MM-DD')}`,
        date: moment(item.DATE).format('YYYY-MM-DD'),
        slug: mapped.slug,
        name: mapped.name,
        target_production: +item.TOTAL_PLAN_FG,
      };
    })
    .reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

  const mapDataFinishGood: Record<string, Data> = finishGood
    .map((item) => {
      const mapped = mappingFactoryLineDF[item.FACTORY_LINE];
      return {
        id: `${mapped.slug}_${moment(item.DATE).format('YYYY-MM-DD')}`,
        date: moment(item.DATE).format('YYYY-MM-DD'),
        slug: mappingFactoryLineDF[item.FACTORY_LINE].slug,
        name: mappingFactoryLineDF[item.FACTORY_LINE].name,
        actual_production: +item.TOTAL_FINISH_GOOD,
      };
    })
    .reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

  const dates = generateDatesBetween(startDate, endDate);

  const combined: Data[] = [];

  dates.forEach((date) => {
    allLines.forEach((line) => {
      const data_plan = mapDataPlan[`${line.slug}_${date}`];
      const data_finish_good = mapDataFinishGood[`${line.slug}_${date}`];

      combined.push({
        date,
        id: `${line.slug}_${date}`,
        slug: line.slug,
        name: line.name,
        target_production: data_plan?.target_production || 0,
        actual_production: data_finish_good?.actual_production || 0,
      });
    });
  });

  return combined;
};
