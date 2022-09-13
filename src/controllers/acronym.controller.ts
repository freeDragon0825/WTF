import { Request, Response, NextFunction } from 'express';

import * as acronymService from '../services/acronym.service';

const getAcronymList = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { from = 0, limit = 10, search = '' } = req.query;
    const acronyms = acronymService.getAcronymList(<string>search);
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

const addAcronym = (req: Request, res: Response, next: NextFunction) => {
  try {
    acronymService.addAcronym(req.body.name, req.body.desc);
    return res.json('Successfully inserted.');
  } catch (error) {
    next(error);
  }
};

const updateAcronym = (req: Request, res: Response, next: NextFunction) => {
  try {
    acronymService.updateAcronym(
      req.params.acronym,
      req.body.name,
      req.body.desc,
    );
    return res.json('Successfully updated.');
  } catch (error) {
    next(error);
  }
};

const deleteAcronym = (req: Request, res: Response, next: NextFunction) => {
  try {
    acronymService.deleteAcronym(req.params.acronym);
    return res.json('Successfully deleted.');
  } catch (error) {
    next(error);
  }
};

export default { getAcronymList, addAcronym, updateAcronym, deleteAcronym };
