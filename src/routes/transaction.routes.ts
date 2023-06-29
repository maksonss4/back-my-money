import { Router } from "express";
import { listWalletController } from "../controllers/wallet/listWallets.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { createWalletController } from "../controllers/wallet/createWallet.controller";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { walletCreateScheama } from "../schemas/wallet.schemas";
import { listTransactionController } from "../controllers/transaction/listTransaction.controller";
import { verifyOwnerWalletMiddleware } from "../middlewares/verifyOwnerWallet.middleware";
import { verifyWalletExistsMiddleware } from "../middlewares/verifyWalletExists.middleware";
import { transactionCreateSchema } from "../schemas/transaction.schemas";
import { createTransactionController } from "../controllers/transaction/createTransaction.controller";
import { verifyIsValidMongoId } from "../middlewares/verifyIsValidMongoId.middleware";

export const transactionRoutes = Router();

transactionRoutes.get("", listTransactionController);
transactionRoutes.post(
  "/:id", // wallet id
  verifyAuthTokenMiddleware,
  verifyIsValidMongoId,
  verifyWalletExistsMiddleware,
  verifyOwnerWalletMiddleware,
  validateSerializerMiddleware(transactionCreateSchema),
  createTransactionController
);
