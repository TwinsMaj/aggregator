import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('LoadingBays').del();

	// Inserts seed entries
	await knex('LoadingBays').insert([
		{ bay_id: 1, property_id: 1, truck_level: true, trailer_53: true, dock_lock: true, leveler: false },
		{ bay_id: 2, property_id: 3, truck_level: false, trailer_53: false, dock_lock: false, leveler: true },
	]);
}
