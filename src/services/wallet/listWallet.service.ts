import Wallet from "../../models/Wallet.model";

export const listWalletService = async () => {
  return await Wallet.find();
};
