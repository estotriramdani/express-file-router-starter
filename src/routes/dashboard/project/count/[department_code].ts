import { Response, Request } from "express";
import { db1 } from "../../../../utils/db1";
import { db2 } from "../../../../utils/db2";
import { db3 } from "../../../../utils/db3";
import path from "path";
import fs from "fs";



export const get = async (req: Request, res: Response) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    let dataCR = await db1.tr_project.count({
      where: {
        type: 'Change Request',
        tr_request: {
          department_code: req.params.department_code
        }
      }
    });

    let dataNewApps = await db1.tr_project.count({
      where: {
        type: 'New Apps',
        tr_request: {
          department_code: req.params.department_code
        }
      }
    });


    let dataPending = await db1.tr_project.count({
      where: {
        state: 2,
        tr_request: {
          department_code: req.params.department_code
        }
      }
    });

    let dataCompleted = await db1.tr_project.count({
      where: {
        state: 6,
        tr_request: {
          department_code: req.params.department_code
        }
      }
    });


    return res.status(200).json({
      data: {
        change_request: dataCR,
        new_apps: dataNewApps,
        pending: dataPending,
        completed: dataCompleted,
      },
      status: true
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};
