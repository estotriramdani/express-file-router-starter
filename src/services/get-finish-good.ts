import { allLines, allLinesKjy, mappingFactoryLineDF, mappingFactoryLineKjy, mappingFactoryLineTableau } from '@/constants';
import { aio_iot_oci1, df_db, dwh_db } from '@/lib/db';
import { datesBetween, generateDatesBetween } from '@/utils';
import moment from 'moment';
import { biDashboardQuery } from './bi-dashboard-query';

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

  const plan: Plan[] = await biDashboardQuery(`SELECT 
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

export const getFinishGoodWithPlanKjy = async (startDate: string, endDate: string) => {
  const whereDate = datesBetween(startDate, endDate);
  console.log(whereDate);
  
  let factoryLine =
    "AND [FACTORY LINE] IN ('OC 1', 'OC 2')";

  type Plan = {
    DATE: string;
    FACTORY_LINE: string;
    TOTAL_PLAN_FG: number;
    TOTAL_FINISH_GOOD: number;
  };

  const plan: Plan[] = await biDashboardQuery(`SELECT 
          [DATE],
          [FACTORY LINE] AS FACTORY_LINE,
          SUM([PLAN FG]) AS TOTAL_PLAN_FG
        FROM 
          [Tb_DAILY_EXCEL_PPIC_PLAN_FG]
        WHERE 
          [FACTORY] = 'KEJAYAN'
          AND [PLAN FG] > 0
          ${whereDate}
          ${factoryLine}
        GROUP BY 
          [DATE],
          [FACTORY LINE]
        ORDER BY [DATE] DESC
      `);

    console.log(plan);
    

  const whereTanggalCek = `create_date BETWEEN '${startDate}' AND '${endDate}'`;

  

  const finishGood = await aio_iot_oci1.$queryRawUnsafe<Plan[]>(`
    SELECT
        DATE(b1.create_date) AS DATE,
        'OC 1' AS FACTORY_LINE,
        (SUM(b1.reguler_qty) * 24) + (SUM(b1.sample_produk) * 24) + SUM(b1.open_box) + 
        (SUM(b1.sample_10) * 24) + (SUM(b1.sample_30) * 24) + (SUM(b1.sample_50) * 24) + 
        (SUM(b1.sample_100) * 24) + (SUM(b1.hold_produk) * 24) + (SUM(b1.hold_mikro) * 24) AS TOTAL_FINISH_GOOD
    FROM
        217_catatan_hasil_produk_jadi_350ml b1
    WHERE
        ${whereTanggalCek}
    GROUP BY
        DATE(b1.create_date)

    UNION

    SELECT
        DATE(b2.create_date) AS DATE,
        'OC 1' AS FACTORY_LINE,
        (SUM(b2.reguler_qty) * 15) + (SUM(b2.sample_produk) * 15) + SUM(b2.open_box) + 
        (SUM(b2.sample_10) * 15) + (SUM(b2.sample_30) * 15) + (SUM(b2.sample_50) * 15) + 
        (SUM(b2.sample_100) * 15) + (SUM(b2.hold_produk) * 15) + (SUM(b2.hold_mikro) * 15) AS TOTAL_FINISH_GOOD
    FROM
        218_catatan_hasil_produk_jadi_900ml b2
    WHERE
      ${whereTanggalCek}
    GROUP BY
        DATE(b2.create_date)
        
    UNION

    SELECT
        DATE(b3.create_date) AS DATE,
        'OC 2' AS FACTORY_LINE,
        (SUM(b3.reguler_qty) * 24) + (SUM(b3.sample_produk) * 24) + SUM(b3.open_box) + 
        (SUM(b3.sample_10) * 24) + (SUM(b3.sample_30) * 24) + (SUM(b3.sample_50) * 24) + 
        (SUM(b3.sample_100) * 24) + (SUM(b3.hold_produk) * 24) + (SUM(b3.hold_mikro) * 24) AS TOTAL_FINISH_GOOD
    FROM
        aio_iot_oci2.216_catatan_hasil_produk_jadi b3
    WHERE
      ${whereTanggalCek}
    GROUP BY
        DATE(b3.create_date)
        
    ORDER BY
        DATE DESC;
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

    console.log('plan mapping', mapDataPlan);
    

  const mapDataFinishGood: Record<string, Data> = finishGood
    .map((item) => {
      const mapped = mappingFactoryLineKjy[item.FACTORY_LINE];      
      return {
        id: `${mapped.slug}_${moment(item.DATE).format('YYYY-MM-DD')}`,
        date: moment(item.DATE).format('YYYY-MM-DD'),
        slug: mappingFactoryLineKjy[item.FACTORY_LINE].slug,
        name: mappingFactoryLineKjy[item.FACTORY_LINE].name,
        actual_production: +item.TOTAL_FINISH_GOOD,
      };
    })
    .reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    console.log('actual mapping', mapDataFinishGood);
    

  const dates = generateDatesBetween(startDate, endDate);

  const combined: Data[] = [];

  dates.forEach((date) => {
    allLinesKjy.forEach((line) => {
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
