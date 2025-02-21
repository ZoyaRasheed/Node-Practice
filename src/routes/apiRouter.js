import { Router } from 'express';
import apiController from '../controller/apiController.js';

const router = Router()

router.route('/health').get(apiController.health)
router.route('/register').post(apiController.register)


export default router;