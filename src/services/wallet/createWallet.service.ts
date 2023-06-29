import { IUserCreate } from "../../interfaces/users.interfaces";
import { IWalletCreate } from "../../interfaces/wallets.interfaces";
import User from "../../models/User.model";

export const createWalletService = async ({
  name,
  userId,
  isPremium,
}: IWalletCreate) => {
  return true;
};
