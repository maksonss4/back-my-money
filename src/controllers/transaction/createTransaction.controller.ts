import { Request, Response } from "express";
import { createTransactionService } from "../../services/transaction/createTransaction.service";

export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  const walletId = req.params.id;
  const { name, value, description, type, transactionDate } = req.validatedBody;
  const newTransaction = await createTransactionService({
    walletId,
    description,
    name,
    value,
    type,
    transactionDate,
  });

  return res.json({
    created: true,
    newTransaction: { ...newTransaction, walletId },
  });
};
