import { Response, Request } from "express";
import { db1 } from "../../../utils/db1";
import { authenticateJWT } from '../../../middlewares/bearerToken';
import { apiOk } from '../../../tools/common';

