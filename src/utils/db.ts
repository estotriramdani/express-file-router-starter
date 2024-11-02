import { PrismaClient as PrismaClientEmployment } from '../generated/employement_db';
import { PrismaClient as PrismaClientDigitalTwin } from '../generated/digital_twin_db';

export const employment_db = new PrismaClientEmployment();

export const digital_twin_db = new PrismaClientDigitalTwin();
