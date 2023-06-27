import User from "../../models/User.model";

export const listUserService = async () => {
  return await User.find();
};
