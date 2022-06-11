import { config } from './src/config';

export default {
	client: 'pg',
	connection: config.db.url,
	migrations: {
		extension: 'ts',
	},
	seeds: {
		extension: 'ts',
	},
};
