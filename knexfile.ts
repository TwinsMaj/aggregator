import { config } from './src/config';

export default {
	client: config.db.client,
	connection: config.db.url,
	migrations: {
		extension: 'ts',
	},
	seeds: {
		extension: 'ts',
	},
	...config.db.defaults,
};
