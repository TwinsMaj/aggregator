import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('MeetingRooms').del();

	// Inserts seed entries
	await knex('MeetingRooms').insert([
		{
			room_id: 1,
			property_id: 2,
			capacity: 300,
			square_footage: 850,
			av_equipment: true,
			exclusive: false,
		},
	]);
}
