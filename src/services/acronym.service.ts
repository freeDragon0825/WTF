import fs from 'fs';

import Acronym from '../models/acronym.model';
import { IAcronym } from '../config/interfaces';
import { acronymFile, ResponseCode } from '../config/constants';
import { HttpException } from '../exceptions/HttpException';

export const getAcronymList = async (search: string) => {
  try {
    const acronyms = await Acronym.find({
      $or: [{ name: { $regex: search } }, { desc: { $regex: search } }],
    });
    return acronyms;
  } catch (error) {
    console.log(error);
    throw new HttpException(ResponseCode.InternalServerError, <string>error);
  }
};

export const addAcronym = async (name: string, desc: string) => {
  try {
    await Acronym.create({ name, desc });
  } catch (error) {
    console.log(error);
    throw new HttpException(ResponseCode.InternalServerError, <string>error);
  }
};

export const updateAcronym = async (
  oldName: string,
  newName: string,
  newDesc: string,
) => {
  try {
    await Acronym.findOneAndUpdate(
      { name: oldName },
      { name: newName, desc: newDesc },
    );
  } catch (error) {
    console.log(error);
    throw new HttpException(ResponseCode.InternalServerError, <string>error);
  }
};

export const deleteAcronym = async (name: string) => {
  try {
    await Acronym.deleteOne({ name: name });
  } catch (error) {
    console.log(error);
    throw new HttpException(ResponseCode.InternalServerError, <string>error);
  }
};

export const initailAcronym = async () => {
  try {
    const data = fs.readFileSync(acronymFile);
    const acronymJSON = JSON.parse(data.toString());
    const acronyms: IAcronym[] = acronymJSON.map(
      (acronym: { [key: string]: string }) => {
        const key = Object.keys(acronym)[0];
        return {
          name: key,
          desc: acronym[key],
        };
      },
    );
    await Acronym.insertMany(acronyms);
    console.log('finished');
  } catch (error) {
    console.log(error);
  }
};
