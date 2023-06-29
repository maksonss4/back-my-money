import Wallet from "../../models/Wallet.model";

interface ICreateTransactionService {
  walletId: string;
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
}: ICreateTransactionService) => {
  const data = { description, name, type, value, transactionDate };
  const wallet = await Wallet.findOne({ _id: walletId });

  type === "out" ? wallet!.moneyOut.push(data) : wallet!.moneyIn.push(data);

  wallet!.save();

  return data;
};
