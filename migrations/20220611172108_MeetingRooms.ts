import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('MeetingRooms', (table) => {
		table.increments('room_id').primary().notNullable();
		table
			.integer('property_id')
			.notNullable()
			.references('property_id')
			.inTable('Properties')
			.onDelete('RESTRICT')
			.onUpdate('RESTRICT');
		table.integer('capacity').notNullable();
		table.integer('square_footage').notNullable();
		table.boolean('av_equipment').notNullable();
		table.boolean('exclusive').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('MeetingRooms');
}
