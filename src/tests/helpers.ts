import knex from '../knex';

export const generateSeeds = async () => {
	await knex('Properties').insert([
		{
			property_id: 1,
			name: 'Rhode store',
			address: 'Westernville park, CA, 124',
			city: 'San Jose',
			province: 'California',
			postal: '241',
			access_247: true,
			utilities_included: false,
			availability: '2022-06-16 05:55:26.490798+00',
			cost: 10000,
		},
		{
			property_id: 2,
			name: 'Freedom Complex',
			address: 'Jahu, Tallinn, Estoniaa',
			city: 'Tallinn',
			province: 'Harjumaa',
			postal: '11715',
			access_247: false,
			utilities_included: false,
			availability: '2022-06-14 05:55:26.490798+00',
			cost: 30000,
		},
		{
			property_id: 3,
			name: 'Habour works',
			address: 'Lagos, Maryland, Anthony street',
			city: 'Lagos',
			province: 'Mainland',
			postal: '234',
			access_247: true,
			utilities_included: true,
			availability: '2022-06-21 05:55:26.490798+00',
			cost: 10000,
		},
	]);

	await knex('Warehouses').insert([
		{
			property_id: 1,
			square_footage: 350,
			fork_lifts: true,
			parking_trailer: true,
			fenced_yard: true,
			power_amps: 700,
		},
		{
			property_id: 3,
			square_footage: 175,
			fork_lifts: true,
			parking_trailer: false,
			fenced_yard: false,
			power_amps: 500,
		},
	]);

	await knex('LoadingBays').insert([
		{ bay_id: 1, property_id: 1, truck_level: true, trailer_53: true, dock_lock: true, leveler: false },
		{ bay_id: 2, property_id: 3, truck_level: false, trailer_53: false, dock_lock: false, leveler: true },
		{ bay_id: 3, property_id: 1, truck_level: false, trailer_53: true, dock_lock: false, leveler: false },
	]);

	await knex('Offices').insert([
		{ property_id: 2, capacity: 300, kitchen: true, gym: false, parking: true, mailservice: false },
	]);

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
};
