import { IAcronym } from '../config/interfaces';
import * as acronymService from '../services/acronym.service';

const query = {
  acronyms: async (
    { from = 0, limit = 10, search = '' }: any,
    context: any,
  ) => {
    const acronyms = <IAcronym[]>await acronymService.getAcronymList(search);
    let nextPage = false;
    const to = Number(from) + Number(limit);
    if (acronyms.length > to) nextPage = true;
    const results = acronyms
      .slice(Number(from), to)
      .map(acronym => ({ name: acronym.name, desc: acronym.desc }));
    return results;
  },
};

export default query;
