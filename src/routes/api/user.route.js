import { Router } from 'express';
import * as UserController from '../../controllers/user.controller';
import * as ProfileController from '../../controllers/profile.controller'
import * as PostController from '../../controllers/posts.controller'

const api = Router();

api.get('/:id/posts', UserController.findAll);
api.get('/:id/profile', ProfileController.findOneById);
api.put('/:id/profile', ProfileController.updatePosts);
api.delete('/:id', UserController.deleteOne);

export default api;
