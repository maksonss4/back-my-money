import { IUser, users } from "../../database";

export async function createUserService({ age, name }: IUser) {
  const newUser = { age, name };
  users.push(newUser);

  return newUser;
}
