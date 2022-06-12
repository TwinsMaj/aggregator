import { Knex } from 'knex';
import { isDbSeeded } from '../docker-files/scripts/check_seeds';

export async function seed(knex: Knex): Promise<void> {
	if (await isDbSeeded(knex)) {
		console.info(`Warehouses table already seeded on first run. Skipping....`);
		return;
	}

	// Deletes ALL existing entries
	await knex('Warehouses').del();

	// Inserts seed entries
	await knex('Warehouses').insert([
		{
			property_id: 1,
			square_footage: 350,
			fork_lifts: true,
			parking_trailer: true,
			fenced_yard: true,
			power_amps: 700,
		},
		{
			property_id: 3,
			square_footage: 175,
			fork_lifts: true,
			parking_trailer: false,
			fenced_yard: false,
			power_amps: 500,
		},
	]);
}
