import { PrismaClient as PrismaClientEmployment } from '@/generated/employement_db';
import { PrismaClient as PrismaClientDigitalTwin } from '@/generated/digital_twin_db';
import { PrismaClient as PrismaClientIotDataRaw } from '@/generated/iot_data_raw_db';

export const employment_db = new PrismaClientEmployment();

export const digital_twin_db = new PrismaClientDigitalTwin();

export const iot_data_raw_db = new PrismaClientIotDataRaw();
