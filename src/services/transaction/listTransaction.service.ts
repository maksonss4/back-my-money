import Transaction from "../../models/Transaction.model";

interface IListTransaction {
  userId: string;
}

export const listTransactionService = async ({ userId }: IListTransaction) => {
  const transactions = await Transaction.find({ userId });

  return transactions;
};
