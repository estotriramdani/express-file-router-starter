import { boiler12tphStatus } from '@/lib/data-fetcher';
import { digital_twin_db } from '@/lib/db';
import type { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  const data = await digital_twin_db.mst_overview.findMany({
    where: {
      area: 'UTILITY',
    },
  });

  const parameterBoilerAndWtp = await digital_twin_db.mst_machine_parameter.findMany({
    where: {
      slug: {
        in: ['boiler-12tph-status', 'wtp-status'],
      },
    },
  });

  // if (params.slug === 'boiler-12tph-status' || params.slug === 'wtp-status') {
  const dataBoiler = await boiler12tphStatus(
    parameterBoilerAndWtp.find((item) => item.slug === 'boiler-12tph-status'),
    'err-boiler-12tph'
  );
  // }

  const dataWtp = await boiler12tphStatus(
    parameterBoilerAndWtp.find((item) => item.slug === 'wtp-status'),
    'err-wtp'
  );

  const withAttributes = data.map((item) => {
    let value: { value: any; last_update: any } = {
      value: 1,
      last_update: new Date().toISOString(),
    };

    if (item.slug === 'wtp-system') {
      value = {
        last_update: new Date().toISOString(),
        value: dataWtp.value.value === 'RUN' ? 1 : 0,
      };
    }
    if (item.slug === 'boiler-system') {
      value = {
        last_update: new Date().toISOString(),
        value: dataBoiler.value.value,
      };
    }

    return {
      type: 'overview',
      id: item.id,
      attributes: {
        slug: item.slug,
        name: item.name,
        uom: item.uom,
        description: item.description,
        placeholder: item.placeholder,
        sourceType: '',
        value: value,
      },
    };
  });

  res.json({
    links: {
      self: process.env.SELF_URL + req.originalUrl,
    },
    data: withAttributes,
  });
};
