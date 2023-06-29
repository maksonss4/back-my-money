import { AppError } from "../../error";
import User from "../../models/User.model";

interface IUpdateUserService {
  userId: string;
  name?: string;
  email?: string;
  lastName?: string;
  age?: number;
  password?: string;
}

export const updateUserService = async ({
  userId,
  age,
  email,
  lastName,
  name,
  password,
}: IUpdateUserService) => {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new AppError("usuário não encontrado");
  }

  if (email && user.email !== email) {
    throw new AppError("Email já está em uso");
  }

  if (age) {
    user.age = age;
  }

  if (email) {
    user.email = email;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (name) {
    user.name = name;
  }

  if (password) {
    user.password = password;
  }

  user.save();

  return user;
};
