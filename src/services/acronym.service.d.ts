import { IAcronym } from '../config/interfaces';
export declare const getAcronymList: (search: string) => IAcronym[];
export declare const addAcronym: (name: string, desc: string) => void;
export declare const updateAcronym: (oldName: string, newName: string, newDesc: string) => void;
export declare const deleteAcronym: (name: string) => void;
