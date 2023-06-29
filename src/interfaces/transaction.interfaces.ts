export interface ITransactionCreate {
  walletId: string;
  name: string;
  value: number;
  description: string;
  type: string;
  transactionDate: Date;
}
