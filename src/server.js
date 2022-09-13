"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const swagger_jsdoc_1 = tslib_1.__importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const acronym_routes_1 = tslib_1.__importDefault(require("./routes/acronym.routes"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/acronym', acronym_routes_1.default);
app.use(error_middleware_1.default);
// for swagger
const options = {
    swaggerDefinition: {
        info: {
            title: 'REST API',
            version: '1.0.0',
            description: 'Example docs',
        },
    },
    apis: ['swagger.yaml'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
const port = process.env.PORT || 80;
exports.Server = app.listen(port, () => {
    console.log('server running on port ' + port);
});
exports.default = app;
//# sourceMappingURL=server.js.map