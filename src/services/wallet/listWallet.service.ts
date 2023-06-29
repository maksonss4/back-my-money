import Wallet from "../../models/Wallet.model";

interface IListWalletService {
  userId: string;
}

export const listWalletService = async ({ userId }: IListWalletService) => {
  const wallets = await Wallet.find({ userId });

  return wallets;
};
