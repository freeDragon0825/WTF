import express, { Router } from 'express';

import validationMiddleware from '../middlewares/validations.middleware';
import acronymCtrl from '../controllers/acronym.controller';
import { CreateAcronymDto } from '../dtos/acronyms.dto';

const router: Router = express.Router();

router.get('/', acronymCtrl.getAcronymList);
router.post('/', validationMiddleware(CreateAcronymDto, 'body'), acronymCtrl.addAcronym);
router.put('/:acronym', acronymCtrl.updateAcronym);
router.delete('/:acronym', acronymCtrl.deleteAcronym);

export default router;
