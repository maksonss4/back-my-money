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

  if (name) {
    wallet!.name = name;
  }

  wallet!.save();

  return wallet;
};
