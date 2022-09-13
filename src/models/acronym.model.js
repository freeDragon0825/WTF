"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeAcronym = exports.readAcronym = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const HttpException_1 = require("../exceptions/HttpException");
const config_1 = require("../config/config");
const readAcronym = () => {
    try {
        const data = fs_1.default.readFileSync(__dirname + '\\' + config_1.dbFile);
        const acronyms = JSON.parse(data.toString());
        return acronyms;
    }
    catch (error) {
        throw new HttpException_1.HttpException(config_1.ResponseCode.InternalServerError, 'file read error');
    }
};
exports.readAcronym = readAcronym;
const writeAcronym = (acronyms) => {
    try {
        fs_1.default.writeFileSync(__dirname + '\\' + config_1.dbFile, JSON.stringify(acronyms));
    }
    catch (error) {
        throw new HttpException_1.HttpException(config_1.ResponseCode.InternalServerError, 'file write error');
    }
};
exports.writeAcronym = writeAcronym;
//# sourceMappingURL=acronym.model.js.map