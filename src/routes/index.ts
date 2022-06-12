/* eslint-disable new-cap */
import express, { Router } from 'express';
import PropertyRouter from './property-router';

const router: Router = express.Router();

// mount all routes here...
router.use(PropertyRouter);

export default router;
