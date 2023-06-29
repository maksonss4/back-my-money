import { AppError } from "../../error";
import User from "../../models/User.model";

interface IListUserService {
  userId: string;
}

export const listUserService = async ({ userId }: IListUserService) => {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new AppError("Usuário não encontrado");
  }

  return user;
};
