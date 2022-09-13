"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const config_1 = require("../config/config");
const HttpException_1 = require("../exceptions/HttpException");
const validationMiddleware = (type, value, skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true) => {
    return (req, res, next) => {
        console.log(req.body);
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted,
        }).then((errors) => {
            if (errors.length > 0) {
                const message = errors
                    .map((error) => Object.values(error.constraints))
                    .join(', ');
                next(new HttpException_1.HttpException(config_1.ResponseCode.BadRequest, message));
            }
            else {
                next();
            }
        });
    };
};
exports.default = validationMiddleware;
//# sourceMappingURL=validations.middleware.js.map