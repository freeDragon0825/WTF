import { IAcronym } from 'config/interfaces';
import * as acronymService from '../services/acronym.service';

const mutation = {
  addAcronym: async ({ name, desc }: any, context: any) => {
    await acronymService.addAcronym(name, desc);
    return { data: { name, desc }, message: 'Create success' };
  },

  updateAcronym: async ({ oldName, newName, newDesc }: any, context: any) => {
    await acronymService.updateAcronym(oldName, newName, newDesc);
    return { data: { newName, newDesc }, message: 'Update success' };
  },

  deleteAcronym: async ({ name }: any, context: any) => {
    await acronymService.deleteAcronym(name);
    return { data: { name }, message: 'Delete success' };
  },
};

export default mutation;
