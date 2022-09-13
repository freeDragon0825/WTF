"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const acronymService = tslib_1.__importStar(require("../services/acronym.service"));
const getAcronymList = (req, res, next) => {
    try {
        const { from = 0, limit = 10, search = '' } = req.query;
        const acronyms = acronymService.getAcronymList(search);
        let nextPage = false;
        const to = Number(from) + Number(limit);
        if (acronyms.length > to)
            nextPage = true;
        return res
            .header('next-page', String(nextPage))
            .json(acronyms.slice(Number(from), to));
    }
    catch (error) {
        next(error);
    }
};
const addAcronym = (req, res, next) => {
    try {
        acronymService.addAcronym(req.body.name, req.body.desc);
        return res.json('Successfully inserted.');
    }
    catch (error) {
        next(error);
    }
};
const updateAcronym = (req, res, next) => {
    try {
        acronymService.updateAcronym(req.params.acronym, req.body.name, req.body.desc);
        return res.json('Successfully updated.');
    }
    catch (error) {
        next(error);
    }
};
const deleteAcronym = (req, res, next) => {
    try {
        acronymService.deleteAcronym(req.params.acronym);
        return res.json('Successfully deleted.');
    }
    catch (error) {
        next(error);
    }
};
exports.default = { getAcronymList, addAcronym, updateAcronym, deleteAcronym };
//# sourceMappingURL=acronym.controller.js.map