import { Knex } from 'knex';
import { isDbSeeded } from '../docker-files/scripts/check_seeds';

export async function seed(knex: Knex): Promise<void> {
	if (await isDbSeeded(knex)) {
		console.info(`Offices table already seeded on first run. Skipping....`);
		return;
	}

	// Deletes ALL existing entries
	await knex('Offices').del();

	// Inserts seed entries
	await knex('Offices').insert([
		{ property_id: 2, capacity: 300, kitchen: true, gym: false, parking: true, mailservice: false },
	]);
}
