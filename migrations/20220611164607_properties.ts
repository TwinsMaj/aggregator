import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('Properties', (table) => {
		table.increments('property_id').primary();
		table.text('name').notNullable();
		table.text('address').notNullable();
		table.text('city').notNullable();
		table.text('province').notNullable();
		table.text('postal').notNullable();
		table.boolean('access_247').nullable();
		table.boolean('utilities_included').nullable();
		table.dateTime('availability').nullable();
		table.integer('cost').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('Properties');
}
