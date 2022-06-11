import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('Offices').del();

	// Inserts seed entries
	await knex('Offices').insert([
		{ property_id: 2, capacity: 300, kitchen: true, gym: false, parking: true, mailservice: false },
	]);
}
