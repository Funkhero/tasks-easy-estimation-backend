import { Request, Response } from 'express';

class EstimationController {
	estimationCreate(req: Request, res: Response) {
		res.send('Estimation created');
	}

	estimationUpdate(req: Request, res: Response) {
		res.send('Estimation updated');
	}

	estimationDelete(req: Request, res: Response) {
		res.send('Estimation deleted');
	}
}

export default new EstimationController();
