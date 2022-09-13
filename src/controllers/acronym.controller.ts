import { Request, Response, NextFunction } from 'express';

import { IAcronym } from 'config/interfaces';

import * as acronymService from '../services/acronym.service';

const getAcronymList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { from = 0, limit = 10, search = '' } = req.query;
    const acronyms = <IAcronym[]>await acronymService.getAcronymList(<string>search);
    let nextPage = false;
    const to = Number(from) + Number(limit);
    if (acronyms.length > to) nextPage = true;
    return res
      .header('next-page', String(nextPage))
      .json(acronyms.slice(Number(from), to));
  } catch (error) {
    next(error);
  }
};

const addAcronym = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await acronymService.addAcronym(req.body.name, req.body.desc);
    return res.json('Successfully inserted.');
  } catch (error) {
    next(error);
  }
};

const updateAcronym = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await acronymService.updateAcronym(
      req.params.acronym,
      req.body.name,
      req.body.desc,
    );
    return res.json('Successfully updated.');
  } catch (error) {
    next(error);
  }
};

const deleteAcronym = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await acronymService.deleteAcronym(req.params.acronym);
    return res.json('Successfully deleted.');
  } catch (error) {
    next(error);
  }
};

export default { getAcronymList, addAcronym, updateAcronym, deleteAcronym };
