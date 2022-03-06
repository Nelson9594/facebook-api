import * as PostModel from '../models/posts.model';

export const createOnePosts = async (request, response) => {
  const postsData = request.body;
  const post = await PostsModel.createPosts({
      message: postsData.message,
      createdAt: new Date(),
      updatedAt: new Date(),
      authorId: postsData.authorId
  });
  response.status(201).json(post);
}

export const findAll = async (_request, response) => {
  response.json({
    posts: await PostsModel.findAll()
  });
}


export const findOneByIdPosts = async (request, response) => {
  const id = request.params.id;

  response.json({
    post: await PostModel.findOneById(Number(id)),
  })
}

export const findOneByAuthorIdPosts = async (request, response) => {
  const id = request.params.id;

  response.json({
    post: await PostModel.findOneByAuthorIdPosts(Number(id)),
  })
}

export const updateOnePosts = async (request, response) => {
  const postsData = request.body;
  const {id} = request.params;

  const posts = await PostsModel.updateOnePosts({
    id: Number(id),
    message: postsData.message,
    updatedAt: new Date()
  })
  response.json({ posts });
}

export const deleteById = async (request, response) => {
  const {id} = request.params;
  if(!Number.isInteger(+id)){
    response.json({error: "ID not find"})
  }else{
   const result = await PostsModel.deleteById(Number(id))
   response.json({})
  }
}
