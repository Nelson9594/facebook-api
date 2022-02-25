import { Router } from 'express';
import * as UserController from '../../controllers/user.controller';

const api = Router();

api.get('/:id/posts', UserController.findAll);
api.get('/:id/profile', UserController.findOneById);
api.put('/:id/profile', UserController.updateOne);
api.delete('/:id', UserController.deleteOne);

export default api;
