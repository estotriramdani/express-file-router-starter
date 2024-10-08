import { Response, Request } from "express";
import { db1 } from "../../../../utils/db1";
import { db3 as employeeModel } from "../../../../utils/db3";
import { authenticateJWT } from '../../../../middlewares/bearerToken';

export const post = [authenticateJWT, async (req: Request, res: Response) => {
  if (req.method !== "POST") return res.status(405);

  getEmployeeHierarchy(req.body.nik.length === 4 ? "0" + req.body.nik : req.body.nik)
    .then(data => {
      // console.log(data)

      const supervisorCodes = data.supervisor_codes
      const supervisorNames = data.supervisor_names
      const supervisorGrades = data.supervisor_grades
      const supervisor_position_desc = data.supervisor_position_desc
      const supervisor_deparment_id = data.supervisor_deparment_id
      

      const supervisors = supervisorCodes.map((code, index) => {
        return {
          code: code,
          name: supervisorNames[index],
          grade: supervisorGrades[index],
          position_desc: supervisor_position_desc[index],
          deparment_id: supervisor_deparment_id[index]
        };
      });

      data['supervisor'] = supervisors


      return res.json({ status: true, data: data });
    })
    .catch(error => {
      console.error(error);
      return res.status(500).json({ status: false, message: "Internal Server Error" });
    });
}];






async function getEmployeeHierarchy(employeeCode: string) {
  const employee: any = await employeeModel.mst_employment.findFirst({
    where: {
      employee_code: employeeCode,
    },
    select: {
      employee_code: true,
      employee_name: true,
      job_grade_code: true,
      supervisor: true,
      supervisor_name: true,
      position_desc:true,
      deparment_id:true
    },
  });

  if (!employee || employee.supervisor === employee.employee_code || employee.supervisor === null) {
    return {
      job_grade_code: 'D3',
      position_desc: 'Board of Director',
      supervisor_codes: [],
      supervisor_names: [],
      supervisor_grades: [],
      supervisor_position_desc: [],
      supervisor_deparment_id: []
    }; // Employee not found
  }

  const supervisorData: any = await getEmployeeHierarchy(employee.supervisor);

  return {
    employee_code: employee.employee_code,
    employee_name: employee.employee_name,
    job_grade_code: employee.job_grade_code,
    position_desc: employee.position_desc,
    deparment_id: employee.deparment_id,
    supervisor_codes: [employee.supervisor, ...(supervisorData ? supervisorData.supervisor_codes : [])],
    supervisor_names: [employee.supervisor_name, ...(supervisorData ? supervisorData.supervisor_names : [])],
    supervisor_grades: [supervisorData?.job_grade_code, ...(supervisorData ? supervisorData.supervisor_grades : [])],
    supervisor_position_desc: [supervisorData?.position_desc, ...(supervisorData ? supervisorData.supervisor_position_desc : [])],
    supervisor_deparment_id: [supervisorData?.deparment_id, ...(supervisorData ? supervisorData.supervisor_deparment_id : [])],
    
  };
}


