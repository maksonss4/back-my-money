import { ObjectId } from "mongodb";
import Wallet from "../../models/Wallet.model";
import Transaction from "../../models/Transaction.model";
import { AppError } from "../../error";

interface IUpdateTransactionService {
  transactionId: string;
  userId: string;
  name: string;
  type: string;
  value: number;
  description: string;
  transactionDate: Date;
}

export const updateTransactionService = async ({
  transactionId,
  description,
  name,
  type,
  value,
  transactionDate,
  userId,
}: IUpdateTransactionService) => {
  const isValidId = ObjectId.isValid(transactionId);

  if (!isValidId) throw new AppError("Id transaction invalido");

  const transaction = await Transaction.findOne({ _id: transactionId });

  if (!transaction) throw new AppError("transaction não existe");

  if (transaction.userId !== userId)
    throw new AppError("Dono do token não é dono da transaction");

  const wallet = await Wallet.findOne({ _id: transaction.walletId });

  if (!wallet) throw new AppError("Wallet não existe");

  if (description) transaction.description = description;
  if (name) transaction.name = name;
  if (type) transaction.type = type;
  if (value) transaction.value = value;
  if (transactionDate)
    transaction.transactionDate = transaction.transactionDate;

  const index = wallet.transactions.findIndex(
    (t: any) => transactionId === t._id.toString()
  );

  wallet.transactions.splice(index, 1);
  wallet.transactions.push(transaction);

  await transaction.save();
  await wallet.save();

  return transaction;
};
