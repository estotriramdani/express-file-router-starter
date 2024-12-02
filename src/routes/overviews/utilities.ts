import type { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
  res.json({
    links: {
      self: process.env.SELF_URL + req.originalUrl,
    },
    data: [
      {
        type: 'ring',
        id: 'cm32etjpp0002hiohtaqoaj10',
        attributes: {
          slug: 'ring-3',
          name: 'Ring 3',
          uom: 'Running/Stop',
          description: null,
          placeholder: 3,
          sourceType: 'source',
          value: {
            value: 1,
            last_update: null,
          },
        },
      },
      {
        type: 'ring',
        id: 'cm32etjpp0002hiohtaqoaj11',
        attributes: {
          slug: 'ring-2',
          name: 'Ring 2',
          uom: 'Running/Stop',
          description: null,
          placeholder: 2,
          sourceType: 'source',
          value: {
            value: 1,
            last_update: null,
          },
        },
      },
      {
        type: 'ring',
        id: 'cm32etjpp0002hiohtaqoaj12',
        attributes: {
          slug: 'ring-1',
          name: 'Ring 1',
          uom: 'Running/Stop',
          description: null,
          placeholder: 1,
          sourceType: 'source',
          value: {
            value: 1,
            last_update: null,
          },
        },
      },
      {
        type: 'ring',
        id: 'cm32etjpp0002hiohtaqo21728',
        attributes: {
          slug: 'wtp-system',
          name: 'WTP system',
          uom: 'Running/Stop',
          description: null,
          placeholder: 4,
          sourceType: 'source',
          value: {
            value: 1,
            last_update: null,
          },
        },
      },
      {
        type: 'ring',
        id: 'cm32etjpp0002hiohtaq12u10',
        attributes: {
          slug: 'boiler-system',
          name: 'Boiler System',
          uom: 'Running/Stop',
          description: null,
          placeholder: 5,
          sourceType: 'source',
          value: {
            value: 1,
            last_update: null,
          },
        },
      },
    ],
  });
};
