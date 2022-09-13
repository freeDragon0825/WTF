"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCode = exports.dbFile = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '../../.env' });
exports.dbFile = 'acronym.json';
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["Success"] = 200] = "Success";
    ResponseCode[ResponseCode["InternalServerError"] = 500] = "InternalServerError";
    ResponseCode[ResponseCode["BadRequest"] = 400] = "BadRequest";
    ResponseCode[ResponseCode["NotFound"] = 404] = "NotFound";
})(ResponseCode = exports.ResponseCode || (exports.ResponseCode = {}));
//# sourceMappingURL=config.js.map