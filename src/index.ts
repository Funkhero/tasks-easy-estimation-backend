import cors from 'cors';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import AuthRoutes from './routes/auth';
import EstimationRoutes from './routes/estimation';

const app = express();
const port = process.env.PORT;

const corsOptions = {
	origin: process.env.FRONTEND_URL,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// App Routes
app.use('/auth', AuthRoutes);
app.use('/estimation', EstimationRoutes);

app.get('*', (req: Request, res: Response) => {
	res.send('<h2>404 error!</h2>')
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
