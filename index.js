const cors = require('cors');
const express = require('express');

const app = express();

const corsOptions = {
	origin: process.env.FRONTEND_URL,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
