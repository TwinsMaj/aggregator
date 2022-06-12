import { Knex } from 'knex';

export async function isDbSeeded(knex: Knex): Promise<boolean> {
	const result = await knex('Knex_seeds_lock').select('is_locked');

	if (result.length === 0) return false;

	const { is_locked } = result[0];
	if (is_locked) return true;

	return false;
}
