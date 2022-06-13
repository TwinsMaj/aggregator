import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import { getPropertyDetails } from '../services/aggregator-service';

const fetchProperty = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.query;
		let data = await getPropertyDetails(Number(id));
		data = data.map((item) => _.omitBy(item, _.isNull));

		return res.status(StatusCodes.OK).json({ data });
	} catch (error) {
		return next(error);
	}
};

export default { fetchProperty };
