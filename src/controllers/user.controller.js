import * as UserModel from '../models/user.model';


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

export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);
  
  await UserModel.deleteOne(id);

  response.status(204).end();
}
