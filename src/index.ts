import express from 'express';
import http from 'http';
import { config } from './config';
import Logger from './logger';

const app = express();

const initServer = async () => {
	http
		.createServer(app)
		.listen(config.server.port, () => Logger.info(`Server is running on port: ${config.server.port}`));
};

(async () => {
	try {
		await initServer();
	} catch (error) {
		Logger.error(`error occurred while initializing service`, { error });
	}
})();
