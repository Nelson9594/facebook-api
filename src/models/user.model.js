import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = ({ email, password }) => {
  return prisma.user.create({
    data:{
       email,
       password,
       Profile:{
            create:{
                firstName: '',
                lastName: ''
            }
       },
       createdAt,
       updatedAt
    }
})

}

export const findOneById = (id, select) => {
  return prisma.user.findUnique({
    where: { id },
    select,
  });
}

export const findByCredentials = ({ email, password }, select) => {
  return prisma.user.findFirst({
    where: {
      email,
      password,
    },
    select,
  });
}

export const deleteById = async({id}) => {
  return prisma.user.delete({
      where: { id }
  })
}