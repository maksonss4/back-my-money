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

transactionRoutes.get("", verifyAuthTokenMiddleware, listTransactionController);

transactionRoutes.post(
  "/:id", // wallet id
  verifyAuthTokenMiddleware,
  verifyIsValidMongoId,
  verifyWalletExistsMiddleware,
  verifyOwnerWalletMiddleware,
  validateSerializerMiddleware(transactionCreateSchema),
  createTransactionController
);
