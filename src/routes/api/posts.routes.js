import { Router } from 'express';
import * as PostsController from '../../controllers/posts.controller';

const api = Router();

api.get('/',PostsController.findAll);
api.get('/:id',PostsController.findOneByIdPosts);
api.post('/',PostsController.createOnePosts);
api.patch('/:id',PostsController.updateOnePosts);
api.delete('/:id',PostsController.deleteById);


export default api;
