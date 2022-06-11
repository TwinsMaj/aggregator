import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('LoadingBays', (table) => {
		table.increments('bay_id').primary().notNullable();
		table
			.integer('property_id')
			.notNullable()
			.references('property_id')
			.inTable('Properties')
			.onDelete('RESTRICT')
			.onUpdate('RESTRICT');
		table.boolean('truck_level').notNullable();
		table.boolean('trailer_53').notNullable();
		table.boolean('dock_lock').notNullable();
		table.boolean('leveler').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('LoadingBays');
}
