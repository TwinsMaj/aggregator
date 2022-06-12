import { Knex } from 'knex';
import { exit } from 'process';
import { isDbSeeded } from '../docker-files/scripts/check_seeds';

export async function seed(knex: Knex): Promise<void> {
	if (await isDbSeeded(knex)) {
		console.info(`Knex_seeds_lock table already seeded on first run. Skipping....`);
		return;
	}
	await knex('Knex_seeds_lock').insert([{ id: 1, is_locked: true }]);
}
