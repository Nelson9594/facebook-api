import { Router } from 'express';
/** Routes */
import user from './user.route';
import auth from './auth.routes';
import posts from './posts.routes';
import jwt from '../../middlewares/jwt.middleware';

const api = Router();

api.use("/users",jwt,user)
api.use("/posts",jwt, posts);
api.use("/auth",auth);


export default api;
