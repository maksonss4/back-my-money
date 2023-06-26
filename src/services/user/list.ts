import { users } from "../../database";

export async function listUserService() {
  return users;
}
