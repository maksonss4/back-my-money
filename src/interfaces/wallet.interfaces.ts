import { ObjectId } from "mongodb";
import { ITransaction } from "./transactions.interfaces";

export interface IWallet {
  _id: ObjectId;
  userId: string;
  name: string;
  transactions: [ITransaction];
  createdAt: Date;
}
