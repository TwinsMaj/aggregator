import express from 'express';
import http from 'http';
import { config } from './config';
import Logger from './logger';
import { apiRules } from './middleware/api-rules';
import { requestLogger } from './middleware/request-logger';

const app = express();

const initServer = async () => {
	// log request
	app.use(requestLogger);

	// define API Rules
	app.use(apiRules);

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
