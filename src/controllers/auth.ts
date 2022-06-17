import { Request, Response } from 'express';

class AuthController {
	userLogin(req: Request, res: Response) {
		res.send('Login page');
	}

	userRegistration(req: Request, res: Response) {
		res.send('Registration page');
	}
}

export default new AuthController();
