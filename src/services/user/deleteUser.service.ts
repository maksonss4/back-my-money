import User from "../../models/User.model";
import Wallet from "../../models/Wallet.model";
import Transaction from "../../models/Transaction.model";
import { AppError } from "../../error";

interface IDeleteUserService {
  userId: string;
}

export const deleteUserService = async ({ userId }: IDeleteUserService) => {
  const user = await User.findOne({ _id: userId });

  if (!user) throw new AppError("User not found");

  await Wallet.deleteMany({ userId });
  await Transaction.deleteMany({ userId });
  await User.deleteOne({ _id: userId });
};
