import express from 'express';
import authController from '../controllers/auth';

const router = express.Router();

router.get('/login', authController.userLogin);
router.get('/registration', authController.userRegistration);

export default router;
