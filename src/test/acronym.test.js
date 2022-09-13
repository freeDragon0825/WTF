"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const server_1 = tslib_1.__importDefault(require("../server"));
const config_1 = require("../config/config");
describe('Acronym test', () => {
    describe('[GET] /acronym', () => {
        it('get acronyms', () => {
            return (0, supertest_1.default)(server_1.default).get('/acronym?from=0&limit=10').expect(config_1.ResponseCode.Success);
        });
    });
    describe('[POST] /acronym', () => {
        it('add a new acronym', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const acronym = {
                name: '__',
                desc: 'this is a test acronym',
            };
            return (0, supertest_1.default)(server_1.default).post('/acronym').send(acronym).expect(config_1.ResponseCode.Success);
        }));
    });
    describe('[PUT] /acronym/:acronym', () => {
        it('update an acronym', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const acronym = {
                name: '__',
                desc: 'updated',
            };
            return (0, supertest_1.default)(server_1.default).put('/acronym/__').send(acronym).expect(config_1.ResponseCode.Success);
        }));
    });
    describe('[DELETE] /acronym/:acronym', () => {
        it('delete an acronym', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return (0, supertest_1.default)(server_1.default).delete('/acronym/__').expect(config_1.ResponseCode.Success);
        }));
    });
});
//# sourceMappingURL=acronym.test.js.map