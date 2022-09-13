import { readAcronym, writeAcronym } from '../models/acronym.model';
import { IAcronym } from '../config/interfaces';

export const getAcronymList = (search: string) => {
  const acronyms: IAcronym[] = readAcronym();
  const results = acronyms.filter(acronym => {
    const key = Object.keys(acronym)[0];
    const value = acronym[key];
    return key.includes(search) || value.includes(search);
  });
  return results;
};

export const addAcronym = (name: string, desc: string) => {
  const acronyms: IAcronym[] = readAcronym();
  acronyms.push({ [name.toUpperCase()]: desc });
  acronyms.sort((a, b) => {
    const key1 = Object.keys(a)[0];
    const key2 = Object.keys(b)[0];
    if (key1 > key2) return 1;
    if (key1 < key2) return -1;
    return 0;
  });
  writeAcronym(acronyms);
};

export const updateAcronym = (
  oldName: string,
  newName: string,
  newDesc: string,
) => {
  const acronyms: IAcronym[] = readAcronym();
  const index = acronyms.findIndex(
    acronym => Object.keys(acronym)[0] === oldName,
  );
  acronyms[index] = { [newName]: newDesc };
  writeAcronym(acronyms);
};

export const deleteAcronym = (name: string) => {
  const acronyms: IAcronym[] = readAcronym();
  const index = acronyms.findIndex(acronym => Object.keys(acronym)[0] === name);
  acronyms.splice(index, 1);
  writeAcronym(acronyms);
};
