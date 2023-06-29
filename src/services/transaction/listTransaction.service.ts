import Wallet from "../../models/Wallet.model";

export const listTransactionService = async () => {
  return await Wallet.find();
};
