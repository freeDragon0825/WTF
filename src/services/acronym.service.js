"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAcronym = exports.updateAcronym = exports.addAcronym = exports.getAcronymList = void 0;
const acronym_model_1 = require("../models/acronym.model");
const getAcronymList = (search) => {
    const acronyms = (0, acronym_model_1.readAcronym)();
    const results = acronyms.filter(acronym => {
        const key = Object.keys(acronym)[0];
        const value = acronym[key];
        return key.includes(search) || value.includes(search);
    });
    return results;
};
exports.getAcronymList = getAcronymList;
const addAcronym = (name, desc) => {
    const acronyms = (0, acronym_model_1.readAcronym)();
    acronyms.push({ [name.toUpperCase()]: desc });
    acronyms.sort((a, b) => {
        const key1 = Object.keys(a)[0];
        const key2 = Object.keys(b)[0];
        if (key1 > key2)
            return 1;
        if (key1 < key2)
            return -1;
        return 0;
    });
    (0, acronym_model_1.writeAcronym)(acronyms);
};
exports.addAcronym = addAcronym;
const updateAcronym = (oldName, newName, newDesc) => {
    const acronyms = (0, acronym_model_1.readAcronym)();
    const index = acronyms.findIndex(acronym => Object.keys(acronym)[0] === oldName);
    acronyms[index] = { [newName]: newDesc };
    (0, acronym_model_1.writeAcronym)(acronyms);
};
exports.updateAcronym = updateAcronym;
const deleteAcronym = (name) => {
    const acronyms = (0, acronym_model_1.readAcronym)();
    const index = acronyms.findIndex(acronym => Object.keys(acronym)[0] === name);
    acronyms.splice(index, 1);
    (0, acronym_model_1.writeAcronym)(acronyms);
};
exports.deleteAcronym = deleteAcronym;
//# sourceMappingURL=acronym.service.js.map