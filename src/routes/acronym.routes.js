"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const validations_middleware_1 = tslib_1.__importDefault(require("../middlewares/validations.middleware"));
const acronym_controller_1 = tslib_1.__importDefault(require("../controllers/acronym.controller"));
const acronyms_dto_1 = require("../dtos/acronyms.dto");
const router = express_1.default.Router();
router.get('/', acronym_controller_1.default.getAcronymList);
router.post('/', (0, validations_middleware_1.default)(acronyms_dto_1.CreateAcronymDto, 'body'), acronym_controller_1.default.addAcronym);
router.put('/:acronym', acronym_controller_1.default.updateAcronym);
router.delete('/:acronym', acronym_controller_1.default.deleteAcronym);
exports.default = router;
//# sourceMappingURL=acronym.routes.js.map