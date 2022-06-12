import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import { errors } from '../errors';
import { getPropertyDetails } from '../services/aggregator-service';

const { ERR_NO_PROPERTY, ServerError } = errors;

const fetchProperty = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.query;

		let data = await getPropertyDetails(Number(id));

		if (data.length === 0) {
			throw new ERR_NO_PROPERTY(`property with id ${id} not found`, {
				level: ServerError.WARN,
				status: StatusCodes.CONFLICT,
			});
		}

		data = data.map((item) => _.omitBy(item, _.isNull));

		return res.status(StatusCodes.OK).json({ data });
	} catch (error) {
		return next(error);
	}
};

export default { fetchProperty };
