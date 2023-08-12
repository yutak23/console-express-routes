import { describe, it } from 'vitest';
import express from 'express';
import consoleExpressRoutes from '../src/index.js';

describe('Test consoleExpressRoutes', () => {
	const app = express();
	const router = express.Router();

	router.post('/test', (req, res) => {
		res.send('test');
	});
	router.get('/test/:id', (req, res) => {
		res.send('test');
	});
	router.patch('/test/:id', (req, res) => {
		res.send('test');
	});
	router.delete('/test/:id', (req, res) => {
		res.send('test');
	});
	router.get('/tests', (req, res) => {
		res.send('test');
	});
	app.use('/api', router);

	app.get('/test', (req, res) => {
		res.send('test');
	});

	it('no authorization headers', () => {
		consoleExpressRoutes(app);
	});
});
