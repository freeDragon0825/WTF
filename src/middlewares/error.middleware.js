"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
const errorMiddleware = (error, req, res, next) => {
    try {
        const status = error.status || config_1.ResponseCode.InternalServerError;
        const message = error.message || 'Something went wrong';
        console.log(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({ message });
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map