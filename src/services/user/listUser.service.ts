import User from "../../models/User.model";

export async function listUserService() {
  return await User.find();
}
