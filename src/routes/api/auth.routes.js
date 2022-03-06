import { Router } from 'express';
import * as AuthController from '../../controllers/auth.controller';

const api = Router();

api.post('/register', AuthController.register);
api.post('/login',AuthController.login)

export default api;
