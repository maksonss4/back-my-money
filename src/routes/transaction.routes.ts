import { Router } from "express";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { listTransactionController } from "../controllers/transaction/listTransaction.controller";
import { verifyOwnerWalletMiddleware } from "../middlewares/verifyOwnerWallet.middleware";
import { verifyWalletExistsMiddleware } from "../middlewares/verifyWalletExists.middleware";
import { transactionCreateSchema } from "../schemas/transaction.schemas";
import { createTransactionController } from "../controllers/transaction/createTransaction.controller";
import { verifyIsValidMongoId } from "../middlewares/verifyIsValidMongoId.middleware";

export const transactionRoutes = Router();

// listar as transações por carteira do usuário dono do token
transactionRoutes.get("", verifyAuthTokenMiddleware, listTransactionController);

// Criar transação em uma carteira do dono do token
transactionRoutes.post(
  "/:id", // wallet id
  verifyAuthTokenMiddleware,
  verifyIsValidMongoId,
  verifyWalletExistsMiddleware,
  verifyOwnerWalletMiddleware,
  validateSerializerMiddleware(transactionCreateSchema),
  createTransactionController
);
