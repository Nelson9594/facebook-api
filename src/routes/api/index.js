import { Router } from 'express';
/** Routes */
import userRoutes from './user.route';

/** Middlewares */
//import jwt from '../../middlewares/jwt.middleware';

const api = Router();

api.use('/user', userRoutes);


export default api;
