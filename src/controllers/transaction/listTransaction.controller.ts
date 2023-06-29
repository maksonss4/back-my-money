import { Request, Response } from "express";
import { listTransactionService } from "../../services/transaction/listTransaction.service";

export const listTransactionController = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId;
  const transactions = await listTransactionService({ userId });
  return res.json(transactions);
};
