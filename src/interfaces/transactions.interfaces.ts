import { ObjectId } from "mongodb";

export interface ITransaction {
  _id: ObjectId;
  userId: string;
  walletId: string;
  type: string;
  name: string;
  value: number;
  description: string;
  transactionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
