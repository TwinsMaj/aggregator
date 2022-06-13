import fs from 'fs';
import path from 'path';
import { app } from '../../index';
import { config } from '../../config';
import knex from '../../knex';
import { generateSeeds } from '../helpers';

import chai from 'chai';
import { StatusCodes } from 'http-status-codes';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Property', () => {
	const dbFileName = String(config.dbName);
	const sqliteFilePath = path.resolve(__dirname, `../../../${dbFileName}`);

	beforeAll(async () => {
		await knex.migrate.latest();
		await generateSeeds();
	});

	afterAll(() => {
		fs.unlinkSync(sqliteFilePath);
	});

	it('should fetch property', (done) => {
		const property_id = 1;
		chai
			.request(app)
			.get('/api/v1/property')
			.query({ id: property_id })
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.status).toBe(StatusCodes.OK);
				expect(res.body.data).toHaveLength(2);
				done();
			});
	});

	it('should fail if property not found', (done) => {
		const property_id = 16;
		chai
			.request(app)
			.get('/api/v1/property')
			.query({ id: property_id })
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.status).toBe(StatusCodes.NOT_FOUND);
				expect(res.body.error.message).toEqual(`property with id ${property_id} not found`);
				expect(res.body.error.code).toEqual('ERR_NO_PROPERTY');
				done();
			});
	});

	it('should fail if no id param passed', (done) => {
		chai
			.request(app)
			.get('/api/v1/property')
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.status).toBe(StatusCodes.BAD_REQUEST);
				expect(res.body.error.code).toEqual('ERR_INVALID_INPUT');
				done();
			});
	});
});
