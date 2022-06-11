import express from 'express';
import http from 'http';
import { config } from './config';

const app = express();

const initServer = async () => {
	http
		.createServer(app)
		.listen(config.server.port, () => console.info(`Server is running on port: ${config.server.port}`));
};

(async () => {
	try {
		await initServer();
	} catch (error) {
		console.error(`error occurred while initializing service`, { error });
	}
})();
