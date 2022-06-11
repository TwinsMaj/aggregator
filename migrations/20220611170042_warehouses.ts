import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('Warehouses', (table) => {
		table
			.integer('property_id')
			.notNullable()
			.primary()
			.references('property_id')
			.inTable('Properties')
			.onDelete('RESTRICT')
			.onUpdate('RESTRICT');
		table.integer('square_footage').notNullable();
		table.boolean('fork_lifts').nullable();
		table.boolean('parking_trailer').nullable();
		table.boolean('fenced_yard').nullable();
		table.integer('power_amps').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('Warehouses');
}
