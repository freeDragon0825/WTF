import { config } from 'dotenv';

config({ path: '../../.env' });

export const dbFile = 'acronym.json';

export enum ResponseCode {
  Success = 200,
  InternalServerError = 500,
  BadRequest = 400,
  NotFound = 404,
}
