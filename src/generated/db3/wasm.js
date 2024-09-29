
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Department_emp_iclaimScalarFieldEnum = {
  id: 'id',
  Description: 'Description',
  Level_id: 'Level_id',
  isParent: 'isParent',
  Location: 'Location',
  head: 'head',
  pic: 'pic',
  create_date: 'create_date'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  is_active: 'is_active',
  Employee_Code: 'Employee_Code',
  nik: 'nik',
  Address_Line_1: 'Address_Line_1',
  Address_Line_2: 'Address_Line_2',
  MailId: 'MailId',
  employment_ou: 'employment_ou',
  employment_ou_desc: 'employment_ou_desc',
  supervisor_nik: 'supervisor_nik',
  Supervisor: 'Supervisor',
  Supervisor_Name: 'Supervisor_Name',
  position_code: 'position_code',
  position_desc: 'position_desc',
  job_grade_code: 'job_grade_code',
  job_grade_desc: 'job_grade_desc',
  org_work_locn_code: 'org_work_locn_code',
  org_work_locn_desc: 'org_work_locn_desc',
  Employee_Name: 'Employee_Name',
  gender_code: 'gender_code',
  Date_Of_joining: 'Date_Of_joining',
  date_of_birth: 'date_of_birth',
  Marital_Status: 'Marital_Status',
  last_update: 'last_update'
};

exports.Prisma.Employee_copy1ScalarFieldEnum = {
  id: 'id',
  Employee_Code: 'Employee_Code',
  nik: 'nik',
  Address_Line_1: 'Address_Line_1',
  Address_Line_2: 'Address_Line_2',
  MailId: 'MailId',
  employment_ou: 'employment_ou',
  employment_ou_desc: 'employment_ou_desc',
  supervisor_nik: 'supervisor_nik',
  Supervisor: 'Supervisor',
  Supervisor_Name: 'Supervisor_Name',
  position_code: 'position_code',
  position_desc: 'position_desc',
  job_grade_code: 'job_grade_code',
  job_grade_desc: 'job_grade_desc',
  org_work_locn_code: 'org_work_locn_code',
  org_work_locn_desc: 'org_work_locn_desc',
  Employee_Name: 'Employee_Name',
  gender_code: 'gender_code',
  Date_Of_joining: 'Date_Of_joining',
  date_of_birth: 'date_of_birth',
  Marital_Status: 'Marital_Status'
};

exports.Prisma.Employee_dataScalarFieldEnum = {
  id: 'id',
  Employee_Code: 'Employee_Code',
  nik: 'nik',
  Address_Line_1: 'Address_Line_1',
  Address_Line_2: 'Address_Line_2',
  MailId: 'MailId',
  employment_ou: 'employment_ou',
  employment_ou_desc: 'employment_ou_desc',
  supervisor_nik: 'supervisor_nik',
  Supervisor: 'Supervisor',
  Supervisor_Name: 'Supervisor_Name',
  position_code: 'position_code',
  position_desc: 'position_desc',
  job_grade_code: 'job_grade_code',
  job_grade_desc: 'job_grade_desc',
  org_work_locn_code: 'org_work_locn_code',
  org_work_locn_desc: 'org_work_locn_desc',
  Employee_Name: 'Employee_Name',
  gender_code: 'gender_code',
  Date_Of_joining: 'Date_Of_joining',
  date_of_birth: 'date_of_birth',
  Marital_Status: 'Marital_Status',
  last_update: 'last_update'
};

exports.Prisma.Hak_aksesScalarFieldEnum = {
  nik: 'nik',
  user_levels: 'user_levels'
};

exports.Prisma.Mst_departmentScalarFieldEnum = {
  id: 'id',
  department_code: 'department_code',
  department_name: 'department_name',
  division_id: 'division_id',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by'
};

exports.Prisma.Mst_department_mappingScalarFieldEnum = {
  id: 'id',
  department_id: 'department_id',
  ramco_dept_code: 'ramco_dept_code',
  ramco_dept_name: 'ramco_dept_name',
  is_deleted: 'is_deleted'
};

exports.Prisma.Mst_divisionScalarFieldEnum = {
  id: 'id',
  division_code: 'division_code',
  division_desc: 'division_desc',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  is_active: 'is_active',
  is_deleted: 'is_deleted'
};

exports.Prisma.Mst_employmentScalarFieldEnum = {
  id: 'id',
  deparment_id: 'deparment_id',
  grade_id: 'grade_id',
  is_active: 'is_active',
  is_presdir: 'is_presdir',
  is_bod: 'is_bod',
  is_depthead: 'is_depthead',
  created_at: 'created_at',
  created_by: 'created_by',
  master_ou_code: 'master_ou_code',
  employee_code: 'employee_code',
  employee_name: 'employee_name',
  address_line_1: 'address_line_1',
  address_line_2: 'address_line_2',
  mail_id: 'mail_id',
  employment_ou: 'employment_ou',
  employment_ou_desc: 'employment_ou_desc',
  supervisor: 'supervisor',
  supervisor_name: 'supervisor_name',
  position_code: 'position_code',
  position_desc: 'position_desc',
  job_grade_code: 'job_grade_code',
  job_grade_desc: 'job_grade_desc',
  org_locn_work_code: 'org_locn_work_code',
  org_locn_work_desc: 'org_locn_work_desc',
  profile_pic: 'profile_pic',
  department_code: 'department_code',
  department_desc: 'department_desc',
  date_of_birth: 'date_of_birth',
  date_of_join: 'date_of_join',
  job_classification: 'job_classification',
  position_start_date: 'position_start_date',
  position_end_date: 'position_end_date',
  phone_number: 'phone_number'
};

exports.Prisma.Mst_employment_bioScalarFieldEnum = {
  employee_code: 'employee_code',
  is_active: 'is_active',
  gender_code: 'gender_code',
  marital_status: 'marital_status',
  nik: 'nik',
  npwp: 'npwp',
  bpjsk: 'bpjsk',
  bpjst: 'bpjst',
  cost_center: 'cost_center',
  profit_center: 'profit_center',
  bank_code: 'bank_code',
  beneficiary_bank: 'beneficiary_bank',
  beneficiary_account: 'beneficiary_account',
  account_name: 'account_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Mst_employment_extScalarFieldEnum = {
  id: 'id',
  deparment_id: 'deparment_id',
  grade_id: 'grade_id',
  is_active: 'is_active',
  is_presdir: 'is_presdir',
  is_bod: 'is_bod',
  is_depthead: 'is_depthead',
  created_at: 'created_at',
  created_by: 'created_by',
  master_ou_code: 'master_ou_code',
  employee_code: 'employee_code',
  employee_name: 'employee_name',
  address_line_1: 'address_line_1',
  address_line_2: 'address_line_2',
  mail_id: 'mail_id',
  employment_ou: 'employment_ou',
  employment_ou_desc: 'employment_ou_desc',
  supervisor: 'supervisor',
  supervisor_name: 'supervisor_name',
  position_code: 'position_code',
  position_desc: 'position_desc',
  job_grade_code: 'job_grade_code',
  job_grade_desc: 'job_grade_desc',
  org_locn_work_code: 'org_locn_work_code',
  org_locn_work_desc: 'org_locn_work_desc',
  profile_pic: 'profile_pic',
  department_code: 'department_code',
  department_desc: 'department_desc',
  date_of_birth: 'date_of_birth',
  date_of_join: 'date_of_join',
  job_classification: 'job_classification',
  position_start_date: 'position_start_date',
  position_end_date: 'position_end_date',
  phone_number: 'phone_number'
};

exports.Prisma.Mst_employment_ext_authScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  password: 'password',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_gradeScalarFieldEnum = {
  id: 'id',
  grade_code: 'grade_code',
  is_presdir: 'is_presdir',
  is_bod: 'is_bod',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  level: 'level',
  weight_objective_score: 'weight_objective_score',
  weight_core_value_score: 'weight_core_value_score'
};

exports.Prisma.Mst_grade_mappingScalarFieldEnum = {
  id: 'id',
  grade_id: 'grade_id',
  ramco_grade_code: 'ramco_grade_code',
  ramco_grade_desc: 'ramco_grade_desc',
  is_deleted: 'is_deleted'
};

exports.Prisma.Mst_worklocnScalarFieldEnum = {
  org_locn_work_code: 'org_locn_work_code',
  org_locn_work_desc: 'org_locn_work_desc'
};

exports.Prisma.Otsuka_emp_asgn_cont_vw_destScalarFieldEnum = {
  master_ou_code: 'master_ou_code',
  Employee_Code: 'Employee_Code',
  Address_Line_1: 'Address_Line_1',
  Address_Line_2: 'Address_Line_2',
  MailId: 'MailId',
  employment_ou: 'employment_ou',
  employment_ou_desc: 'employment_ou_desc',
  Supervisor: 'Supervisor',
  Supervisor_Name: 'Supervisor_Name',
  Department_code: 'Department_code',
  Department_desc: 'Department_desc',
  position_code: 'position_code',
  position_desc: 'position_desc',
  job_grade_code: 'job_grade_code',
  job_grade_desc: 'job_grade_desc',
  JOB_CLASSIFICATION: 'JOB_CLASSIFICATION',
  org_work_locn_code: 'org_work_locn_code',
  org_work_locn_desc: 'org_work_locn_desc',
  JOIN_DATE: 'JOIN_DATE',
  RESIGN_DATE: 'RESIGN_DATE'
};

exports.Prisma.Php_ms_loginScalarFieldEnum = {
  lg_nik: 'lg_nik',
  lg_name: 'lg_name',
  lg_password: 'lg_password',
  lg_department: 'lg_department',
  lg_location: 'lg_location',
  lg_product: 'lg_product',
  lg_email_aio: 'lg_email_aio',
  lg_email_private: 'lg_email_private',
  lg_update: 'lg_update',
  lg_propose: 'lg_propose',
  lg_admin: 'lg_admin',
  lg_retur: 'lg_retur',
  lg_retur_admin: 'lg_retur_admin',
  lg_level: 'lg_level',
  lg_type: 'lg_type',
  lg_ga: 'lg_ga',
  lg_aktif: 'lg_aktif',
  lg_costcenter: 'lg_costcenter',
  protean_location: 'protean_location',
  protean_department: 'protean_department',
  lg_profitcenter: 'lg_profitcenter',
  lg_corp_cc: 'lg_corp_cc',
  tgl_rfc: 'tgl_rfc',
  lg_faktur: 'lg_faktur',
  lg_claim_track: 'lg_claim_track',
  n_photo: 'n_photo',
  n_phone: 'n_phone',
  n_level: 'n_level',
  n_info: 'n_info',
  ifi_level: 'ifi_level',
  beclaim_level: 'beclaim_level',
  cms_level: 'cms_level',
  qc_level: 'qc_level',
  invoice_level: 'invoice_level',
  visit_level: 'visit_level',
  paper_level: 'paper_level',
  apps_aktif: 'apps_aktif',
  beclaim_kjy_level: 'beclaim_kjy_level',
  ifi_kjy_level: 'ifi_kjy_level',
  invoice_kjy_level: 'invoice_kjy_level',
  beclaim_ho_level: 'beclaim_ho_level',
  lg_entitas: 'lg_entitas',
  ihelprpt_level: 'ihelprpt_level',
  rfid: 'rfid',
  section: 'section',
  sectionParent: 'sectionParent',
  categoryShift: 'categoryShift',
  isCS: 'isCS',
  facebook_URL: 'facebook_URL',
  instagram_URL: 'instagram_URL',
  limaes_level: 'limaes_level',
  iot_skb: 'iot_skb',
  lims_oto: 'lims_oto',
  gmp_apps: 'gmp_apps',
  gen_apps: 'gen_apps',
  id_telegram: 'id_telegram',
  head1: 'head1',
  head2: 'head2',
  head3: 'head3',
  isEmployee: 'isEmployee',
  apar_apps: 'apar_apps',
  qa_apk: 'qa_apk',
  role_wp: 'role_wp',
  qa_lims_al4: 'qa_lims_al4'
};

exports.Prisma.Php_ms_login_osScalarFieldEnum = {
  lg_name: 'lg_name',
  lg_nik: 'lg_nik',
  sectionParent: 'sectionParent',
  lg_location: 'lg_location',
  id_company: 'id_company',
  lg_password: 'lg_password',
  pic: 'pic',
  id: 'id',
  gen_apps: 'gen_apps',
  lg_aktif: 'lg_aktif'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  department_emp_iclaim: 'department_emp_iclaim',
  employee: 'employee',
  employee_copy1: 'employee_copy1',
  employee_data: 'employee_data',
  hak_akses: 'hak_akses',
  mst_department: 'mst_department',
  mst_department_mapping: 'mst_department_mapping',
  mst_division: 'mst_division',
  mst_employment: 'mst_employment',
  mst_employment_bio: 'mst_employment_bio',
  mst_employment_ext: 'mst_employment_ext',
  mst_employment_ext_auth: 'mst_employment_ext_auth',
  mst_grade: 'mst_grade',
  mst_grade_mapping: 'mst_grade_mapping',
  mst_worklocn: 'mst_worklocn',
  otsuka_emp_asgn_cont_vw_dest: 'otsuka_emp_asgn_cont_vw_dest',
  php_ms_login: 'php_ms_login',
  php_ms_login_os: 'php_ms_login_os'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
