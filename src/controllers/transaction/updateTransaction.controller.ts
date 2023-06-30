import { Request, Response } from "express";
import { updateTransactionService } from "../../services/transaction/updateTransaction.service";

export const updateTransactionController = async (
  req: Request,
  res: Response
) => {
  const { walletId, transactionId } = req.params;
  const { name, type, value, description, transactionDate } = req.validatedBody;
  const transactionUpdated = await updateTransactionService({
    transactionId,
    walletId,
    name,
    type,
    value,
    description,
    transactionDate,
  });

  return res.json(transactionUpdated);
};
