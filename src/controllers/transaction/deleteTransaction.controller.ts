import { Request, Response } from "express";
import { deleteTransactionService } from "../../services/transaction/deleteTransaction.service";

export const deleteTransactionController = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId;
  const transactionId = req.params.transactionId;
  await deleteTransactionService({
    transactionId,
    userId,
  });

  return res.json({
    success: true,
    message: "Transaction deleted successfully",
  });
};
