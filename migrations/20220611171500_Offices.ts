import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('Offices', (table) => {
		table
			.integer('property_id')
			.primary()
			.notNullable()
			.references('property_id')
			.inTable('Properties')
			.onDelete('RESTRICT')
			.onUpdate('RESTRICT');
		table.integer('capacity').nullable();
		table.boolean('kitchen').nullable();
		table.boolean('gym').nullable();
		table.boolean('parking').nullable();
		table.boolean('mailservice').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('Offices');
}
