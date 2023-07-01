import { AppError } from "../../error";
import Wallet from "../../models/Wallet.model";

interface IUpdateWallet {
  walletId: string;
  name?: string;
}

export const updateWalletService = async ({
  walletId,
  name,
}: IUpdateWallet) => {
  const wallet = await Wallet.findOne({ _id: walletId });

  if (!wallet) throw new AppError("Wallet not found");

  if (name) wallet.name = name;

  await wallet.save();

  return wallet;
};
