import { Request, Response } from "express";
import { listTransactionService } from "../../services/transaction/listTransaction.service";

export const listTransactionController = async (
  req: Request,
  res: Response
) => {
  const transaction = await listTransactionService();
  return res.json(transaction);
};
