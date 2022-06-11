import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

const devConfig = {
	server: {
		port: SERVER_PORT,
		env: 'development',
	},
};

const testConfig = {
	server: {
		port: 3434,
		env: 'test',
	},
};

export const config = process.env.NODE_ENV === 'test' ? testConfig : devConfig;
