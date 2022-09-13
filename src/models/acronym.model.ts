import fs from 'fs';

import { HttpException } from '../exceptions/HttpException';
import { IAcronym } from '../config/interfaces';
import { ResponseCode, dbFile } from '../config/config';

export const readAcronym = (): IAcronym[] => {
  try {
    const data = fs.readFileSync(__dirname + '\\' + dbFile);
    const acronyms = JSON.parse(data.toString());
    return acronyms;
  } catch (error) {
    throw new HttpException(ResponseCode.InternalServerError, 'file read error');
  }
};

export const writeAcronym = (acronyms: IAcronym[]) => {
  try {
    fs.writeFileSync(__dirname + '\\' + dbFile, JSON.stringify(acronyms));
  } catch (error) {
    throw new HttpException(ResponseCode.InternalServerError, 'file write error');
  }
};
