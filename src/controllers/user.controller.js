import * as UserModel from '../models/user.model';
import * as postsModel from '../models/posts.model';
import * as ProfileModel from '../models/profile.model';

export const findAll = async (_request, response) => {
  response.json({
    user: await UserModel.findAll(),
  });
}

export const findOneById = async (request, response) => {
  const id = request.params.id;

  response.json({
    user: await UserModel.findOneById(id),
  })
}

export const updateOne = async (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { email, profile, password } = request.body;

  const users = await UserModel.updateOne({
    id: Number(id), 
    email,
    profile,
    password,
  });

  response.json({ user });
}

export const deleteById = async (request, response) => {
  const id = Number(request.params.id);
  
  await UserModel.deleteById(id);
  await ProfileModel.deleteByUserId(id)
  await postsModel.deleteByAuthorId(id)

  response.status(200).json();
}
