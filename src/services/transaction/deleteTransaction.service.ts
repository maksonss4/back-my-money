import { ObjectId } from "mongodb";
import { AppError } from "../../error";
import Transaction from "../../models/Transaction.model";
import Wallet from "../../models/Wallet.model";

interface IDeleteTransactionService {
  userId: string;
  transactionId: string;
}

export const deleteTransactionService = async ({
  transactionId,
  userId,
}: IDeleteTransactionService) => {
  const isValidId = ObjectId.isValid(transactionId);

  if (!isValidId) throw new AppError("Id transaction invalido");

  const transaction = await Transaction.findOne({ _id: transactionId });

  if (!transaction) throw new AppError("Transaction not found");

  if (transaction.userId !== userId)
    throw new AppError("Usuário dono do token não é dono da transação");

  const wallet = await Wallet.findOne({ _id: transaction.walletId });

  if (!wallet) throw new AppError("Wallet not found");

  const index = wallet.transactions.findIndex(
    (t: any) => t._id.toString() === transactionId
  );

  wallet.transactions.splice(index, 1);

  await wallet.save();

  await Transaction.deleteOne({ _id: transactionId });

  return true;
};
