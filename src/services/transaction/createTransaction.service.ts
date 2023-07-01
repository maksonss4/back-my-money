import { AppError } from "../../error";
import Wallet from "../../models/Wallet.model";
import Transaction from "../../models/Transaction.model";

interface ICreateTransactionService {
  walletId: string;
  userId: string;
  name: string;
  value: number;
  description: string;
  type: string;
  transactionDate: Date;
}

export const createTransactionService = async ({
  description,
  name,
  type,
  value,
  transactionDate,
  walletId,
  userId,
}: ICreateTransactionService) => {
  value = type === "out" ? value * -1 : value;
  const wallet = await Wallet.findOne({ _id: walletId });

  if (!wallet) throw new AppError("Wallet não existe");

  const newTransaction = await Transaction.create({
    userId,
    walletId,
    type,
    name,
    value,
    description,
    transactionDate,
  });

  wallet.transactions.push(newTransaction);

  await wallet.save();

  return newTransaction;
};
