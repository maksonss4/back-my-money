import { Router } from "express";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { listTransactionController } from "../controllers/transaction/listTransaction.controller";
import { verifyOwnerWalletMiddleware } from "../middlewares/verifyOwnerWallet.middleware";
import { verifyWalletExistsMiddleware } from "../middlewares/verifyWalletExists.middleware";
import {
  transactionCreateSchema,
  transactionUpdateSchema,
} from "../schemas/transaction.schemas";
import { createTransactionController } from "../controllers/transaction/createTransaction.controller";
import { updateTransactionController } from "../controllers/transaction/updateTransaction.controller";
import { deleteTransactionController } from "../controllers/transaction/deleteTransaction.controller";

export const transactionRoutes = Router();

// listar as transações por carteira do usuário dono do token
transactionRoutes.get("", verifyAuthTokenMiddleware, listTransactionController);

// Criar transação em uma carteira do dono do token
transactionRoutes.post(
  "/:walletId", // wallet id
  verifyAuthTokenMiddleware,
  verifyWalletExistsMiddleware,
  verifyOwnerWalletMiddleware,
  validateSerializerMiddleware(transactionCreateSchema),
  createTransactionController
);

// Atualizar dados da transação
transactionRoutes.patch(
  "/:transactionId",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(transactionUpdateSchema),
  updateTransactionController
);

// Deletar transação
transactionRoutes.delete(
  "/:transactionId",
  verifyAuthTokenMiddleware,
  deleteTransactionController
);
