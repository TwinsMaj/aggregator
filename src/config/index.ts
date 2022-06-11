import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;
const DB_NAME = process.env.DB_NAME || '';
const DB_USER = process.env.DB_USER || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_HOST = process.env.DB_HOST || '';

const DATABASE_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const devConfig = {
	server: {
		port: SERVER_PORT,
		env: 'development',
	},
	db: {
		url: DATABASE_URL,
	},
};

const testConfig = {
	server: {
		port: 3434,
		env: 'test',
	},
	db: {
		url: '',
	},
};

export const config = process.env.NODE_ENV === 'test' ? testConfig : devConfig;
