import { Knex } from 'knex';
import { isDbSeeded } from '../docker-files/scripts/check_seeds';

export async function seed(knex: Knex): Promise<void> {
	if (await isDbSeeded(knex)) {
		console.info(`LoadingBays table already seeded on first run. Skipping....`);
		return;
	}

	// Deletes ALL existing entries
	await knex('LoadingBays').del();

	// Inserts seed entries
	await knex('LoadingBays').insert([
		{ bay_id: 1, property_id: 1, truck_level: true, trailer_53: true, dock_lock: true, leveler: false },
		{ bay_id: 2, property_id: 3, truck_level: false, trailer_53: false, dock_lock: false, leveler: true },
	]);
}
