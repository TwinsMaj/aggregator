import Joi from 'joi';

const fetchProperty = {
	query: Joi.object().keys({
		id: Joi.number().required(),
	}),
};

export default {
	FETCH_PROPERTY_JOI_SCHEMA: fetchProperty,
};
