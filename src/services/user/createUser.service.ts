import { IUserCreate } from "../../interfaces/users.interfaces";
import User from "../../models/User.model";

export const createUserService = async ({
  age,
  name,
  lastName,
  password,
  email,
}: IUserCreate) => {
  const newUser = await User.create({ age, name, lastName, password, email });
  newUser.password = undefined;

  return newUser;
};
