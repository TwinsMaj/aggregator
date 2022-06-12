import express from 'express';
import controller from '../controllers/property-controller';
import validate from '../middleware/validate';
import propertyValidation from '../validation/validation-schema';

const router = express.Router();
const { FETCH_PROPERTY_JOI_SCHEMA } = propertyValidation;

router.get('/property', validate(FETCH_PROPERTY_JOI_SCHEMA), controller.fetchProperty);

export default router;
