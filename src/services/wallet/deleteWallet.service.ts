import Wallet from "../../models/Wallet.model";
import Transaction from "../../models/Transaction.model";
import { AppError } from "../../error";

interface IDeleteWalletService {
  walletId: string;
}

export const deleteWalletService = async ({
  walletId,
}: IDeleteWalletService) => {
  const wallet = await Wallet.findOne({ _id: walletId });

  if (!wallet) throw new AppError("Wallet not found");

  await Transaction.deleteMany({ walletId });

  await Wallet.deleteOne({ _id: walletId });

  return true;
};
