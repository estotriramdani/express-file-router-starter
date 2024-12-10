import { Response } from 'express';
import { authenticateJWT } from '@/middlewares/bearerToken';
import { ExtendedRequest } from '@/types/auth';
import { digital_twin_db } from '@/lib/db';
import { boiler12tphStatus, getDataParameters } from '@/lib/data-fetcher';
import { IParameterResult } from '@/types/response';
import { generateError, generateRandomString } from '@/utils';
import { catchResponse } from '@/utils/response';

export const get = [
  authenticateJWT,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const { machineSlug } = req.params;

      if (machineSlug === 'wtp-system') {
        return res.json({
          "links": {
            "self": "https://api-aio.molca.id/machines/wtp-system/overviews"
          },
          "data": {
            "type": "overviews",
            "id": "2",
            "attributes": {
              "slug": "wtp-system",
              "info": {
                "type": "machine-info",
                "id": "2",
                "attributes": {
                  "description": null,
                  "documentation_url": null
                }
              },
              "parameters": [
                {
                  "type": "machine-parameters",
                  "id": "1",
                  "attributes": {
                    "slug": "ph-wtp",
                    "name": "PH",
                    "description": "PH [5-7 Passed, Not Passed]",
                    "uom": "pH",
                    "sourceType": "unknown",
                    "placeholder": 1,
                    "value": {
                      "value": 7.64,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "2",
                  "attributes": {
                    "slug": "conductivity-ro1",
                    "name": "Conductivity RO 1",
                    "description": "Conductivity RO 1",
                    "uom": "unknown",
                    "sourceType": "unknown",
                    "placeholder": 2,
                    "value": {
                      "value": 11.32,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "3",
                  "attributes": {
                    "slug": "conductivity-ro2",
                    "name": "Conductivity RO 2",
                    "description": "Conductivity RO 2",
                    "uom": "unknown",
                    "sourceType": "unknown",
                    "placeholder": 3,
                    "value": {
                      "value": 5.34,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "4",
                  "attributes": {
                    "slug": "turbidity",
                    "name": "Turbidity",
                    "description": "Turbidity [<= 1 Passsed, Not Passed]",
                    "uom": "unknown",
                    "sourceType": "unknown",
                    "placeholder": 4,
                    "value": {
                      "value": 1.13,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "5",
                  "attributes": {
                    "slug": "conductivity-in-tank",
                    "name": "Conductivity in Tank",
                    "description": "Conductivity in tank [<= 10 Passsed, Not Passed]",
                    "uom": "unknown",
                    "sourceType": "unknown",
                    "placeholder": 5,
                    "value": {
                      "value": 13.31,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "6",
                  "attributes": {
                    "slug": "err-wtp",
                    "name": "ERR WTP",
                    "description": "ERR WTP [A <= 2, B 2.1-3, C 3.1-4, D 4.1-5, E 5.1-8, F 8.1-17.0, G > 17.1] (m3/kWh)",
                    "uom": "m3/kWh",
                    "sourceType": "unknown",
                    "placeholder": 6,
                    "value": {
                      "value": 17.3,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "7",
                  "attributes": {
                    "slug": "ro-yield",
                    "name": "RO Yield",
                    "description": null,
                    "uom": "%",
                    "sourceType": "unknown",
                    "placeholder": 7,
                    "value": {
                      "value": 87,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "8",
                  "attributes": {
                    "slug": "ro-level",
                    "name": "RO Level",
                    "description": null,
                    "uom": "%",
                    "sourceType": "unknown",
                    "placeholder": 8,
                    "value": {
                      "value": 94,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "9",
                  "attributes": {
                    "slug": "wtp-status",
                    "name": "WTP Status",
                    "description": "WTP Status [Run/Stop/Regenerasi]",
                    "uom": "Run/Stop/Regenerasi",
                    "sourceType": "unknown",
                    "placeholder": 9,
                    "value": {
                      "value": "RUN",
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "10",
                  "attributes": {
                    "slug": "feed-water-flow-rate",
                    "name": "Feed Water Flow Rate",
                    "description": null,
                    "uom": "m3/kWh",
                    "sourceType": "unknown",
                    "placeholder": 10,
                    "value": {
                      "value": 30.36,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "11",
                  "attributes": {
                    "slug": "spare1",
                    "name": "Spare 1",
                    "description": null,
                    "uom": "unknown",
                    "sourceType": "unknown",
                    "placeholder": 11,
                    "value": {
                      "value": 1,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                },
                {
                  "type": "machine-parameters",
                  "id": "12",
                  "attributes": {
                    "slug": "spare2",
                    "name": "Spare 2",
                    "description": null,
                    "uom": "unknown",
                    "sourceType": "unknown",
                    "placeholder": 12,
                    "value": {
                      "value": 8.41,
                      "last_update": "2024-11-04T02:32:08.702Z"
                    }
                  }
                }
              ]
            }
          }
        })
      }

      const links = {
        self: process.env.SELF_URL + req.originalUrl,
      };

      const data = await digital_twin_db.mst_machine_parameter.findMany({
        where: {
          machine_slug: machineSlug,
        },
      });

      if (data.length === 0) {
        return res.status(404).json({
          errors: [
            generateError({
              code: 404,
              description: 'Parameter not found',
              id: generateRandomString(10),
              status: 404,
              title: 'Parameter not found',
              timestamp: new Date().toISOString(),
            }),
          ],
        });
      }

      const dataParameters = await Promise.all(
        data.map(async (params) => {
          let data = await getDataParameters(params);

          if (params.slug === 'boiler-12tph-status') {
            data = await boiler12tphStatus(params);
          }

          const restructured: IParameterResult = {
            type: 'parameters',
            id: data.id,
            attributes: { ...data, placeholder: params.placeholder },
          };
          return restructured;
        })
      );

      const dataMachine = await digital_twin_db.mst_machine.findFirst({
        where: {
          slug: machineSlug,
        },
      });

      const responseData = {
        type: 'overview',
        id: dataMachine.id,
        attributes: {
          slug: dataMachine.slug,
          info: {
            type: 'machine-info',
            id: dataMachine.id,
            attributes: {
              description: dataMachine.description,
              documentation_url: dataMachine.documentation_url,
            },
          },
          parameters: dataParameters,
        },
      };

      res.json({ links, data: responseData });
    } catch (error) {
      console.log(error);
      catchResponse(res, error);
    }
  },
];
