import knex from '../knex';

export const getPropertyDetails = async (property_id: number): Promise<Array<Record<string, any>>> => {
	const data = await knex('Properties')
		.leftJoin('Warehouses', 'Properties.property_id', 'Warehouses.property_id')
		.leftJoin('Offices', 'Properties.property_id', 'Offices.property_id')
		.leftJoin('MeetingRooms', 'Properties.property_id', 'MeetingRooms.property_id')
		.leftJoin('LoadingBays', 'Properties.property_id', 'LoadingBays.property_id')
		.select('*')
		.where('Properties.property_id', '=', property_id);

	return data;
};
