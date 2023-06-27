import { IUserCreate } from "../../interfaces/users.interfaces";
import User from "../../models/User.model";

export async function createUserService({
  age,
  name,
  lastName,
  password,
  email,
}: IUserCreate) {
  const newUser = await User.create({ age, name, lastName, password, email });

  return newUser;
}
