import type { Request, Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { generateError, generateRandomString, generateWeeks } from '@/utils';
import { catchResponse } from '@/utils/response';
import { df_db, dwh_db } from '@/lib/db';
import moment from 'moment';
import { getFinishGoodWithPlan } from '@/services/get-finish-good';
import { allLines } from '@/constants';

interface ResponseDataFinishGood {
  type: string;
  id: string;
  attributes: {
    slug: string;
    name: string;
    date: string;
    value: {
      actual_production: number;
      target_production: number;
      last_update?: any;
    };
  };
}

export const get = [
  // authenticateJWT,
  async (req: Request, res: Response) => {
    try {
      const { unit } = req.query;

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      // if (unit === 'monthly') {
      //   const finalData: ResponseDataFinishGood[] = [];
      //   const weeks = generateWeeks(moment().format('YYYY-MM-DD'));
      //   for (let i = 0; i < weeks.length; i++) {
      //     const { start, end } = weeks[i];
      //     const combined = await getFinishGoodWithPlan(start, end);
      //     allLines.forEach((line) => {
      //       let actual_production = 0;
      //       let target_production = 0;
      //       const filtered = combined.filter((item) => item.slug === line.slug);
      //       filtered.forEach((item) => {
      //         actual_production += item.actual_production;
      //         target_production += item.target_production;
      //       });
      //       finalData.push({
      //         type: 'production-plan',
      //         id: `${line.slug}_${start}`,
      //         attributes: {
      //           slug: line.slug,
      //           name: line.name,
      //           date: start,
      //           value: {
      //             actual_production,
      //             target_production,
      //             last_update: null,
      //           },
      //         },
      //       });
      //     });
      //   }

      //   return res.json({
      //     links,
      //     data: finalData,
      //     _meta: {
      //       date: {
      //         start: weeks[0].start,
      //         end: weeks[weeks.length - 1].end,
      //       },
      //     },
      //   });
      // }

      // const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD 00:00:00');
      // const endDate = moment().add(8, 'days').format('YYYY-MM-DD 23:59:59');

      // const combined = await getFinishGoodWithPlan(startDate, endDate);

      // const finalData: ResponseDataFinishGood[] = combined.map((item) => {
      //   const isAfter = moment(item.date).isAfter(moment());
      //   return {
      //     type: isAfter ? 'production-plan-target' : 'production-plan',
      //     id: item.id,
      //     attributes: {
      //       slug: item.slug,
      //       name: item.name,
      //       date: new Date(item.date).toISOString(),
      //       value: {
      //         actual_production: item.actual_production,
      //         target_production: item.target_production,
      //         last_update: null,
      //       },
      //     },
      //   };
      // });

      let finalDataDummy: any;

      if (unit === 'weekly') {
        finalDataDummy = {
          "links": {
            "self": links
          },
          "data": [
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-16T04:22:36.071Z",
                "value": {
                  "actual_production": 62523,
                  "target_production": 350438,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-16T04:22:36.071Z",
                "value": {
                  "actual_production": 171808,
                  "target_production": 429362,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-17T04:22:36.071Z",
                "value": {
                  "actual_production": 259384,
                  "target_production": 300047,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-17T04:22:36.071Z",
                "value": {
                  "actual_production": 147986,
                  "target_production": 304302,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-18T04:22:36.071Z",
                "value": {
                  "actual_production": 145045,
                  "target_production": 323903,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-18T04:22:36.071Z",
                "value": {
                  "actual_production": 163899,
                  "target_production": 359473,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-19T04:22:36.071Z",
                "value": {
                  "actual_production": 153972,
                  "target_production": 412071,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-19T04:22:36.071Z",
                "value": {
                  "actual_production": 185854,
                  "target_production": 375270,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-20T04:22:36.071Z",
                "value": {
                  "actual_production": 48967,
                  "target_production": 403584,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-20T04:22:36.071Z",
                "value": {
                  "actual_production": 252031,
                  "target_production": 486837,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-21T04:22:36.071Z",
                "value": {
                  "actual_production": 216962,
                  "target_production": 312371,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-21T04:22:36.071Z",
                "value": {
                  "actual_production": 158493,
                  "target_production": 376945,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-22T04:22:36.071Z",
                "value": {
                  "actual_production": 47420,
                  "target_production": 444191,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-22T04:22:36.071Z",
                "value": {
                  "actual_production": 122920,
                  "target_production": 410624,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-23T04:22:36.071Z",
                "value": {
                  "actual_production": 57421,
                  "target_production": 436672,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-23T04:22:36.071Z",
                "value": {
                  "actual_production": 118015,
                  "target_production": 407355,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-24T04:22:36.071Z",
                "value": {
                  "actual_production": 101177,
                  "target_production": 451831,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-24T04:22:36.071Z",
                "value": {
                  "actual_production": 225071,
                  "target_production": 424469,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-25T04:22:36.071Z",
                "value": {
                  "actual_production": 207441,
                  "target_production": 331600,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-25T04:22:36.071Z",
                "value": {
                  "actual_production": 151321,
                  "target_production": 428584,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-26T04:22:36.071Z",
                "value": {
                  "actual_production": 12335,
                  "target_production": 284946,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-26T04:22:36.071Z",
                "value": {
                  "actual_production": 82639,
                  "target_production": 489140,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-27T04:22:36.071Z",
                "value": {
                  "actual_production": 239128,
                  "target_production": 402017,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-27T04:22:36.071Z",
                "value": {
                  "actual_production": 120512,
                  "target_production": 409816,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-28T04:22:36.071Z",
                "value": {
                  "actual_production": 223040,
                  "target_production": 304449,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-28T04:22:36.071Z",
                "value": {
                  "actual_production": 197474,
                  "target_production": 478917,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-29T04:22:36.071Z",
                "value": {
                  "actual_production": 184265,
                  "target_production": 451206,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-29T04:22:36.071Z",
                "value": {
                  "actual_production": 98576,
                  "target_production": 454812,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-30T04:22:36.071Z",
                "value": {
                  "actual_production": 214911,
                  "target_production": 475502,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-30T04:22:36.071Z",
                "value": {
                  "actual_production": 208098,
                  "target_production": 293226,
                  "last_update": null
                }
              }
            }
          ],
          "included": [
            {
              "type": "production-plan-target",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "name": "Line OC1",
                "slug": "line-oc1",
                "value": {
                  "target_production": 5259212,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan-target",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "name": "Line OC2",
                "slug": "line-oc2",
                "value": {
                  "target_production": 4589780,
                  "last_update": null
                }
              }
            }
          ],
          "_meta": {
            "date": {
              "start": "2024-12-16T04:22:36.071Z",
              "end": "2024-12-30T04:22:36.071Z"
            }
          }
        }
      } else {
        finalDataDummy = {
          "links": {
            "self": links
          },
          "data": [
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-23T04:24:15.857Z",
                "value": {
                  "actual_production": 34593,
                  "target_production": 274809,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-23T04:24:15.857Z",
                "value": {
                  "actual_production": 103900,
                  "target_production": 302331,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2024-12-30T04:24:15.857Z",
                "value": {
                  "actual_production": 14138,
                  "target_production": 309243,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2024-12-30T04:24:15.857Z",
                "value": {
                  "actual_production": 143884,
                  "target_production": 355260,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2025-01-06T04:24:15.857Z",
                "value": {
                  "actual_production": 233710,
                  "target_production": 351061,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2025-01-06T04:24:15.857Z",
                "value": {
                  "actual_production": 53368,
                  "target_production": 351463,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2025-01-13T04:24:15.857Z",
                "value": {
                  "actual_production": 173276,
                  "target_production": 420348,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2025-01-13T04:24:15.857Z",
                "value": {
                  "actual_production": 175566,
                  "target_production": 403946,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "slug": "line-oc1",
                "name": "Line OC1",
                "date": "2025-01-20T04:24:15.857Z",
                "value": {
                  "actual_production": 226404,
                  "target_production": 321448,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "slug": "line-oc2",
                "name": "Line OC2",
                "date": "2025-01-20T04:24:15.857Z",
                "value": {
                  "actual_production": 23224,
                  "target_production": 515944,
                  "last_update": null
                }
              }
            }
          ],
          "included": [
            {
              "type": "production-plan-target",
              "id": "cm32etjpp0002hiohtaqoajx9",
              "attributes": {
                "name": "Line OC1",
                "slug": "line-oc1",
                "value": {
                  "target_production": 7765057,
                  "last_update": null
                }
              }
            },
            {
              "type": "production-plan-target",
              "id": "cm32etjpp0002hiohtaqoajx4",
              "attributes": {
                "name": "Line OC2",
                "slug": "line-oc2",
                "value": {
                  "target_production": 8872775,
                  "last_update": null
                }
              }
            }
          ],
          "_meta": {
            "date": {
              "start": "2024-12-23T04:24:15.857Z",
              "end": "2025-01-23T04:24:15.857Z"
            }
          }
        }
      }
      // res.json({
      //   links,
      //   data: finalData,
      //   _meta: {
      //     date: {
      //       start: new Date(startDate).toISOString(),
      //       end: new Date(endDate).toISOString(),
      //     },
      //   },
      // });

      res.json(finalDataDummy)
    } catch (error) {
      catchResponse(res, error);
    }
  },
];
