import { AppError } from "../../error";
import { IWalletCreate } from "../../interfaces/wallets.interfaces";
import Wallet from "../../models/Wallet.model";

export const createWalletService = async ({
  name,
  userId,
  isPremium,
}: IWalletCreate) => {
  const wallets = await Wallet.find({ userId });

  if (wallets.length >= 1 && !isPremium) {
    throw new AppError("Usuários básicos podem ter apenas uma carteira");
  }

  if (wallets.length >= 5) {
    throw new AppError("Usuário premium pode possuir no máximo 5 carteiras");
  }

  const newWallet = await Wallet.create({
    name,
    userId,
  });

  return newWallet;
};
