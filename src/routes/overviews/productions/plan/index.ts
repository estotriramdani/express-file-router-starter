import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';

export const get = [
  authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const data = [];

      res.json({
        links: {
          self: 'https://api-aio.molca.id/overviews/productions/plan',
        },
        data: [
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 207636,
                target_production: 454623,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 174602,
                target_production: 317304,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 219682,
                target_production: 439577,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 100935,
                target_production: 364503,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 220910,
                target_production: 510706,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 203268,
                target_production: 316437,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-03T12:00:36.843Z',
              value: {
                actual_production: 136596,
                target_production: 380592,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 126810,
                target_production: 431533,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 115243,
                target_production: 464114,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 145972,
                target_production: 389772,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 180329,
                target_production: 462617,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 169435,
                target_production: 512892,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 163767,
                target_production: 451935,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-04T12:00:36.843Z',
              value: {
                actual_production: 54952,
                target_production: 405662,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 91662,
                target_production: 411642,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 247360,
                target_production: 372766,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 258885,
                target_production: 448052,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 76519,
                target_production: 419220,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 53104,
                target_production: 299720,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 227007,
                target_production: 518838,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-05T12:00:36.843Z',
              value: {
                actual_production: 56083,
                target_production: 434180,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 159034,
                target_production: 301722,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 49726,
                target_production: 457612,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 66057,
                target_production: 466307,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 171442,
                target_production: 411117,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 7638,
                target_production: 306624,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 176648,
                target_production: 392541,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-06T12:00:36.843Z',
              value: {
                actual_production: 43690,
                target_production: 498139,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 235122,
                target_production: 321992,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 64986,
                target_production: 315189,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 112280,
                target_production: 491447,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 61850,
                target_production: 327213,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 39067,
                target_production: 316903,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 247482,
                target_production: 402731,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-07T12:00:36.843Z',
              value: {
                actual_production: 50321,
                target_production: 518623,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 17871,
                target_production: 460513,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 227127,
                target_production: 312167,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 214604,
                target_production: 341261,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 71121,
                target_production: 516503,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 167844,
                target_production: 377389,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 148999,
                target_production: 303350,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-08T12:00:36.843Z',
              value: {
                actual_production: 214561,
                target_production: 429398,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 207707,
                target_production: 300339,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 49080,
                target_production: 510137,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 166461,
                target_production: 274712,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 202837,
                target_production: 316442,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 132679,
                target_production: 428783,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 71436,
                target_production: 458543,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-09T12:00:36.843Z',
              value: {
                actual_production: 90065,
                target_production: 422293,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 259744,
                target_production: 485083,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 62644,
                target_production: 386424,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 242366,
                target_production: 292005,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 26092,
                target_production: 421829,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 194060,
                target_production: 273229,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 20046,
                target_production: 469259,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-10T12:00:36.843Z',
              value: {
                actual_production: 177381,
                target_production: 366603,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 44441,
                target_production: 337577,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 226094,
                target_production: 519670,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 27473,
                target_production: 448468,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 124658,
                target_production: 362017,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 208061,
                target_production: 317372,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 79515,
                target_production: 402152,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-11T12:00:36.843Z',
              value: {
                actual_production: 45705,
                target_production: 414885,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 201925,
                target_production: 514134,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 89190,
                target_production: 272922,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 80108,
                target_production: 330521,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 134949,
                target_production: 292935,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 28787,
                target_production: 267690,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 150751,
                target_production: 325170,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-12T12:00:36.843Z',
              value: {
                actual_production: 225345,
                target_production: 518952,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 62443,
                target_production: 511943,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 258979,
                target_production: 349172,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 238743,
                target_production: 515304,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 118981,
                target_production: 323013,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 36855,
                target_production: 427658,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 220574,
                target_production: 387348,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-13T12:00:36.843Z',
              value: {
                actual_production: 3786,
                target_production: 393593,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 90528,
                target_production: 388347,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 82590,
                target_production: 414259,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 33445,
                target_production: 391919,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 132947,
                target_production: 433831,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 222934,
                target_production: 325514,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 65613,
                target_production: 469440,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-14T12:00:36.843Z',
              value: {
                actual_production: 137882,
                target_production: 417906,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 188916,
                target_production: 265636,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 62231,
                target_production: 324542,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 92567,
                target_production: 317354,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 199264,
                target_production: 315654,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 69713,
                target_production: 493521,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 6772,
                target_production: 456258,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-15T12:00:36.843Z',
              value: {
                actual_production: 156348,
                target_production: 499045,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 9642,
                target_production: 482350,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 164259,
                target_production: 430163,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 178944,
                target_production: 447328,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 256042,
                target_production: 389403,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 76260,
                target_production: 326771,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 25158,
                target_production: 500176,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-16T12:00:36.843Z',
              value: {
                actual_production: 166822,
                target_production: 399293,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              slug: 'line-can',
              name: 'Line CAN',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 219089,
                target_production: 474904,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              slug: 'line-sachet',
              name: 'Line Sachet',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 104639,
                target_production: 269616,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              slug: 'line-pet2',
              name: 'Line PET 2',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 59870,
                target_production: 331330,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              slug: 'line-enmix',
              name: 'Line ENMIX',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 207934,
                target_production: 288488,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              slug: 'line-glass-bottle',
              name: 'Line Glass Bottle',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 62055,
                target_production: 518526,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              slug: 'line-oc3',
              name: 'Line OC3',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 60606,
                target_production: 380109,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              slug: 'line-al4',
              name: 'Line AL4',
              date: '2024-12-17T12:00:36.843Z',
              value: {
                actual_production: 147939,
                target_production: 406073,
                last_update: null,
              },
            },
          },
        ],
        included: [
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajz6',
            attributes: {
              name: 'Line CAN',
              slug: 'line-can',
              value: {
                target_production: 7754452,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx7',
            attributes: {
              name: 'Line Sachet',
              slug: 'line-sachet',
              value: {
                target_production: 728111,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx8',
            attributes: {
              name: 'Line PET 2',
              slug: 'line-pet2',
              value: {
                target_production: 3814971,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx6',
            attributes: {
              name: 'Line ENMIX',
              slug: 'line-enmix',
              value: {
                target_production: 835618,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx5',
            attributes: {
              name: 'Line Glass Bottle',
              slug: 'line-glass-bottle',
              value: {
                target_production: 7972800,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx9',
            attributes: {
              name: 'Line OC3',
              slug: 'line-oc3',
              value: {
                target_production: 2313691,
                last_update: null,
              },
            },
          },
          {
            type: 'production-plan-target',
            id: 'cm32etjpp0002hiohtaqoajx4',
            attributes: {
              name: 'Line AL4',
              slug: 'line-al4',
              value: {
                target_production: 8438605,
                last_update: null,
              },
            },
          },
        ],
        _meta: {
          date: {
            start: '2024-12-03T12:00:36.843Z',
            end: '2024-12-17T12:00:36.843Z',
          },
        },
      });
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
