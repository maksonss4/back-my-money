import { Request, Response } from "express";
import { updateTransactionService } from "../../services/transaction/updateTransaction.service";

export const updateTransactionController = async (
  req: Request,
  res: Response
) => {
  const { transactionId } = req.params;
  const userId = req.userId;
  const { name, type, value, description, transactionDate } = req.validatedBody;
  const transactionUpdated = await updateTransactionService({
    userId,
    transactionId,
    name,
    type,
    value,
    description,
    transactionDate,
  });

  return res.json(transactionUpdated);
};
