import request from 'supertest';

import App from '../server';
import { CreateAcronymDto } from '../dtos/acronyms.dto';
import { ResponseCode } from '../config/constants';

describe('Acronym test', () => {
  describe('[GET] /acronym', () => {
    it('get acronyms', () => {
      return request(App).get('/acronym?from=0&limit=10').expect(ResponseCode.Success);
    });
  });

  describe('[POST] /acronym', () => {
    it('add a new acronym', async () => {
      const acronym: CreateAcronymDto = {
        name: '__',
        desc: 'this is a test acronym',
      };
      return request(App).post('/acronym').send(acronym).expect(ResponseCode.Success);
    });
  });

  describe('[PUT] /acronym/:acronym', () => {
    it('update an acronym', async () => {
      const acronym: CreateAcronymDto = {
        name: '__',
        desc: 'updated',
      };
      return request(App).put('/acronym/__').send(acronym).expect(ResponseCode.Success);
    });
  });

  describe('[DELETE] /acronym/:acronym', () => {
    it('delete an acronym', async () => {
      return request(App).delete('/acronym/__').expect(ResponseCode.Success);
    });
  });
});
