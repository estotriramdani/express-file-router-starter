import { db1 } from "@/utils/db1";
import { Response, Request } from "express";
import { authenticateJWT } from '@/middlewares/bearerToken';

export const get =[ async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const data = await db1.tr_project_team.findMany({
    where: {
      project_id: parseInt(req.params.id) as number,
      is_deleted: false,
    },
    include: {
      mst_authorization: {
        include: {
          mst_manpower_cost: true,
        }
      }
    }
  });
  // console.log('team',data);
  

  return res.json({data});
}];

export const put = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    // const updateParticipant = await db1.tr_project_team.update({
    //   where: { id: parseInt(req.params.id) },
    //   data: req.body,
    // });
    // return res.json(updateParticipant);
    console.log("update team");
    const id_project = parseInt(req.params.id)
    const employee_codes = req.body.form_data.employee_code
    const created_by = req.body.form_data.created_by
    let result : Array<{ newData: any, deleted: any }> = [];
    let deleted:any;
    let newTeam:any;

    const oldData = await db1.tr_project_team.findMany({
      where: {
        project_id: id_project,
        is_deleted: false,
      }
    });

    // 1. Mengambil oldData yang employee_code-nya tidak ada di employee_codes
    const needToDelete = oldData.filter(item => !employee_codes.includes(item.employee_code));

    // 2. Mengambil data dari employee_codes yang tidak ada di oldData
    const needToAdd = employee_codes.filter(code => !oldData.some(item => item.employee_code === code));

    needToDelete.forEach(async (data:any)=>{
      deleted = await db1.tr_project_team.update({
        where: { id: data.id },
        data: {is_deleted: true}
      });
    })
    
    needToAdd.forEach(async (data:any)=>{
      newTeam = await db1.tr_project_team.create({
        data: {
          project_id : id_project,
          employee_code : data,
          is_deleted: false,
          created_by : created_by
        }
      });
      console.log('newTeam',newTeam);
      
    })

    result.push({ newData: newTeam, deleted: deleted });
    console.log('result',result);
    
    // const newData = req.body.form_data
    
    // const oldData = await db1.tr_project_team.findMany({
    //   where: {
    //     project_id: parseInt(req.params.id) as number,
    //     is_deleted: false,
    //   }
    // });
    // console.log('oldData',oldData);
    // console.log('new',newData);

    // const difData = oldData.find(old => old.employee_code !== newData.employee_code);
    // let updateParticipant: any;

    // if (difData) {
    //   updateParticipant = await db1.tr_project_team.update({
    //     where: { id: difData.id },
    //     data: {is_deleted: true}
    //   });
      
    // } else {
    //   updateParticipant = await db1.tr_project_team.create({
    //     data: req.body.form_data,
    //   });

    // }
  
    // console.log('difData',difData);
    return res.json(result);
    
  } catch (error) {
    return res.status(500).json({ error: "Failed to update participant" });
  }
}];

export const del = [authenticateJWT, async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
    await db1.tr_project_team.update({
      where: { id: parseInt(req.params.id) },
      data: { is_deleted: true }
    });
    // return res.status(204).end();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Failed to delete participant" });
  }
}];