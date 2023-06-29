import { ITransactionCreate } from "../../interfaces/transaction.interfaces";
import Wallet from "../../models/Wallet.model";

export const createTransactionService = async ({
  description,
  name,
  type,
  value,
  transactionDate,
  walletId,
}: ITransactionCreate) => {
  const data = { description, name, type, value, transactionDate };
  const wallet = await Wallet.findOne({ _id: walletId });

  type === "out" ? wallet!.moneyOut.push(data) : wallet!.moneyIn.push(data);

  wallet!.save();

  return data;
};
