
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

exports.Prisma.Mst_applicationScalarFieldEnum = {
  id: 'id',
  application_name: 'application_name',
  group_id_technician: 'group_id_technician',
  entity_id: 'entity_id',
  department_code: 'department_code',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_application_versionScalarFieldEnum = {
  id: 'id',
  application_id: 'application_id',
  version: 'version',
  content: 'content',
  golive_date: 'golive_date'
};

exports.Prisma.Mst_authorizationScalarFieldEnum = {
  id: 'id',
  employee_code: 'employee_code',
  employee_name: 'employee_name',
  is_active: 'is_active',
  created_at: 'created_at',
  created_by: 'created_by',
  technician_level: 'technician_level',
  active_profile: 'active_profile',
  active_entities: 'active_entities',
  is_deleted: 'is_deleted'
};

exports.Prisma.Mst_authorization_profileScalarFieldEnum = {
  id: 'id',
  employee_code: 'employee_code',
  profile_id: 'profile_id',
  entities_id: 'entities_id',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_authorization_usergroupScalarFieldEnum = {
  id: 'id',
  employee_code: 'employee_code',
  group_id: 'group_id',
  is_manager: 'is_manager',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_entitiesScalarFieldEnum = {
  id: 'id',
  entities_name: 'entities_name',
  parent_id: 'parent_id',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_groupScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  group_name: 'group_name',
  parent_id: 'parent_id',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_manpower_costScalarFieldEnum = {
  id: 'id',
  technician_level: 'technician_level',
  hourly: 'hourly',
  monthly: 'monthly',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Mst_profileScalarFieldEnum = {
  id: 'id',
  profile_name: 'profile_name',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_documentScalarFieldEnum = {
  id: 'id',
  type: 'type',
  type_id: 'type_id',
  name: 'name',
  filename: 'filename',
  filepath: 'filepath',
  mime: 'mime',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_historyScalarFieldEnum = {
  id: 'id',
  type: 'type',
  type_id: 'type_id',
  action: 'action',
  document_id: 'document_id',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_projectScalarFieldEnum = {
  id: 'id',
  request_id: 'request_id',
  application_id: 'application_id',
  project_code: 'project_code',
  background: 'background',
  issue_description: 'issue_description',
  business_impact: 'business_impact',
  group_id: 'group_id',
  plan_start_date: 'plan_start_date',
  plant_end_date: 'plant_end_date',
  real_start_date: 'real_start_date',
  real_end_date: 'real_end_date',
  percent_done: 'percent_done',
  auto_percent_done: 'auto_percent_done',
  status: 'status',
  is_deleted: 'is_deleted',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_project_activityScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  activity_name: 'activity_name',
  date: 'date',
  content: 'content',
  document: 'document',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_project_overviewScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  purpose: 'purpose',
  goals: 'goals',
  success_measurement: 'success_measurement',
  intangible_benefit: 'intangible_benefit',
  impact_of_not_doing: 'impact_of_not_doing',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_project_participantScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  employee_code: 'employee_code',
  role: 'role',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_project_risk_mitigationScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  risk: 'risk',
  point_control: 'point_control',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_project_scopeScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  features: 'features',
  description: 'description',
  type: 'type',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_project_taskScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  task_name: 'task_name',
  content: 'content',
  plan_start_date: 'plan_start_date',
  plan_end_date: 'plan_end_date',
  real_start_date: 'real_start_date',
  real_end_date: 'real_end_date',
  planned_duration: 'planned_duration',
  real_duration: 'real_duration',
  percent_done: 'percent_done',
  cost: 'cost',
  task_type: 'task_type',
  created_at: 'created_at',
  created_by: 'created_by',
  task_category: 'task_category'
};

exports.Prisma.Tr_project_teamScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  employee_code: 'employee_code',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_requestScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  ticket_name: 'ticket_name',
  creation_date: 'creation_date',
  closed_date: 'closed_date',
  creator: 'creator',
  status: 'status',
  urgency: 'urgency',
  expected_completion_date: 'expected_completion_date',
  category: 'category',
  type: 'type',
  department_code: 'department_code',
  is_project: 'is_project',
  background: 'background',
  issue_description: 'issue_description',
  business_impact: 'business_impact',
  created_at: 'created_at',
  created_by: 'created_by'
};

exports.Prisma.Tr_request_validationScalarFieldEnum = {
  id: 'id',
  request_id: 'request_id',
  user_id: 'user_id',
  user_id_validate: 'user_id_validate',
  comment_submission: 'comment_submission',
  comment_validation: 'comment_validation',
  status: 'status',
  submission_date: 'submission_date',
  validation_date: 'validation_date'
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
  mst_application: 'mst_application',
  mst_application_version: 'mst_application_version',
  mst_authorization: 'mst_authorization',
  mst_authorization_profile: 'mst_authorization_profile',
  mst_authorization_usergroup: 'mst_authorization_usergroup',
  mst_entities: 'mst_entities',
  mst_group: 'mst_group',
  mst_manpower_cost: 'mst_manpower_cost',
  mst_profile: 'mst_profile',
  tr_document: 'tr_document',
  tr_history: 'tr_history',
  tr_project: 'tr_project',
  tr_project_activity: 'tr_project_activity',
  tr_project_overview: 'tr_project_overview',
  tr_project_participant: 'tr_project_participant',
  tr_project_risk_mitigation: 'tr_project_risk_mitigation',
  tr_project_scope: 'tr_project_scope',
  tr_project_task: 'tr_project_task',
  tr_project_team: 'tr_project_team',
  tr_request: 'tr_request',
  tr_request_validation: 'tr_request_validation'
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
