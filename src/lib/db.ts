import { PrismaClient as PrismaClientEmployment } from '@/generated/employement_db';
import { PrismaClient as PrismaClientDigitalTwin } from '@/generated/digital_twin_db';
import { PrismaClient as PrismaClientIotDataRaw } from '@/generated/iot_data_raw_db';
import { PrismaClient as PrismaClientIotAvevaHistorian } from '@/generated/aveva_historian_db';
import { PrismaClient as PrismaClientScada } from '@/generated/scada_db';
import { PrismaClient as PrismaClientDf } from '@/generated/aio_iot_engineering_db';
import { PrismaClient as PrismaClientAioIot } from '@/generated/aio_iot_db';
import { PrismaClient as PrismaClientDwh } from '@/generated/dwh_db';
import { PrismaClient as PrismaClientAioIotOci1 } from '@/generated/aio_iot_oci1';
import { PrismaClient as PrismaClientAioIotOci2 } from '@/generated/aio_iot_oci2';
import { PrismaClient as PrismaClientNodeRedKjy } from '@/generated/node_red_kjy';
import { PrismaClient as PrismaClientScadaDb1Kjy } from '@/generated/scada_db1_kjy';

export const employment_db = new PrismaClientEmployment();

export const digital_twin_db = new PrismaClientDigitalTwin();

export const iot_data_raw_db = new PrismaClientIotDataRaw();

export const aveva_historian_db = new PrismaClientIotAvevaHistorian();

export const scada_db = new PrismaClientScada();

export const df_db = new PrismaClientDf();

export const aio_iot_db = new PrismaClientAioIot();

export const dwh_db = new PrismaClientDwh();

export const aio_iot_oci1 = new PrismaClientAioIotOci1();

export const aio_iot_oci2 = new PrismaClientAioIotOci2();

export const node_red_kjy = new PrismaClientNodeRedKjy();

export const scada_db1_kjy = new PrismaClientScadaDb1Kjy();