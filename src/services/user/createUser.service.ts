import { AppError } from "../../error";
import User from "../../models/User.model";

export interface ICreateUserService {
  email: string;
  name: string;
  lastName: string;
  age: number;
  password: string;
}

export const createUserService = async ({
  age,
  name,
  lastName,
  password,
  email,
}: ICreateUserService) => {
  const newEmail = email;

  const existingUser = await User.findOne({ email: newEmail });

  if (existingUser) {
    throw new AppError("Email already registered");
  }

  const newUser = await User.create({ age, name, lastName, password, email });
  newUser.password = undefined;

  return newUser;
};
