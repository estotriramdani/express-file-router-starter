import { authenticateJWT } from '@/middlewares/bearerToken';
import type { Request, Response } from 'express';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    const links = {
      self: process.env.SELF_URL + req.originalUrl,
    };

    res.json({
      links: links,
      data: [
        {
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajz6',
          attributes: {
            slug: 'line-can',
            name: 'Line CAN',
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
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajx7',
          attributes: {
            slug: 'line-sachet',
            name: 'Line Sachet',
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
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajx8',
          attributes: {
            slug: 'line-pet',
            name: 'Line PET',
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
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajx6',
          attributes: {
            slug: 'line-enmix',
            name: 'Line ENMIX',
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
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajx5',
          attributes: {
            slug: 'line-glass-bottle',
            name: 'Line Glass Bottle',
            uom: 'Running/Stop',
            description: null,
            placeholder: 5,
            sourceType: 'source',
            value: {
              value: 0,
              last_update: null,
            },
          },
        },
        {
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajx9',
          attributes: {
            slug: 'line-oc3',
            name: 'Line OC3',
            uom: 'Running/Stop',
            description: null,
            placeholder: 6,
            sourceType: 'source',
            value: {
              value: 1,
              last_update: null,
            },
          },
        },
        {
          type: 'lines',
          id: 'cm32etjpp0002hiohtaqoajx4',
          attributes: {
            slug: 'line-al4',
            name: 'Line AL4',
            uom: 'Running/Stop',
            description: null,
            placeholder: 7,
            sourceType: 'source',
            value: {
              value: 0,
              last_update: null,
            },
          },
        },
      ],
    });
  },
];
