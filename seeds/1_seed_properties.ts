import { Knex } from 'knex';
import { isDbSeeded } from '../docker-files/scripts/check_seeds';

export async function seed(knex: Knex): Promise<void> {
	if (await isDbSeeded(knex)) {
		console.info(`Properties table already seeded on first run. Skipping....`);
		return;
	}

	// Deletes ALL existing entries
	await knex('Properties').del();

	// Inserts seed entries
	await knex('Properties').insert([
		{
			property_id: 1,
			name: 'Rhode store',
			address: 'Westernville park, CA, 124',
			city: 'San Jose',
			province: 'California',
			postal: '241',
			access_247: true,
			utilities_included: false,
			availability: knex.raw(`? + ?::INTERVAL`, [knex.fn.now(), '3 day']),
			cost: 10000,
		},
		{
			property_id: 2,
			name: 'Freedom Complex',
			address: 'Jahu, Tallinn, Estoniaa',
			city: 'Tallinn',
			province: 'Harjumaa',
			postal: '11715',
			access_247: false,
			utilities_included: false,
			availability: knex.raw(`? + ?::INTERVAL`, [knex.fn.now(), '1 day']),
			cost: 30000,
		},
		{
			property_id: 3,
			name: 'Habour works',
			address: 'Lagos, Maryland, Anthony street',
			city: 'Lagos',
			province: 'Mainland',
			postal: '234',
			access_247: true,
			utilities_included: true,
			availability: knex.raw(`? + ?::INTERVAL`, [knex.fn.now(), '8 day']),
			cost: 10000,
		},
	]);
}
