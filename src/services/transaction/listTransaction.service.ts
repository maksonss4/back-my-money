import Wallet from "../../models/Wallet.model";

interface IListTransaction {
  userId: string;
}

export const listTransactionService = async ({ userId }: IListTransaction) => {
  const wallets = await Wallet.find({ userId });

  const transactions = wallets.map((wallet) => {
    const transaction = {
      walletId: wallet._id,
      moneyIn: wallet.moneyIn,
      moneyOut: wallet.moneyOut,
    };

    return transaction;
  });

  return transactions;
};
