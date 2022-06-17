import express from 'express';
import estimationController from '../controllers/estimation';

const router = express.Router();

router.get('/create', estimationController.estimationCreate);
router.get('/update', estimationController.estimationUpdate);
router.get('/delete', estimationController.estimationDelete);

export default router;
