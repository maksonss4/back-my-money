import { Request, Response } from "express";
import { createTransactionService } from "../../services/transaction/createTransaction.service";

export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  const walletId = req.params.walletId;
  const userId = req.userId;
  const { name, value, description, type, transactionDate } = req.validatedBody;
  const newTransaction = await createTransactionService({
    walletId,
    description,
    name,
    value,
    type,
    transactionDate,
    userId,
  });

  return res.json({
    created: true,
    newTransaction,
  });
};
