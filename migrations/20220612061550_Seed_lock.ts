import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('Knex_seeds_lock', (table) => {
		table.increments('id').primary().notNullable();
		table.boolean('is_locked').notNullable().defaultTo(false);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('Knex_seeds_lock');
}
