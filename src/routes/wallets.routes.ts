import { Router } from "express";
import { listWalletController } from "../controllers/wallet/listWallets.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { createWalletController } from "../controllers/wallet/createWallet.controller";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { walletCreateScheama } from "../schemas/wallet.schemas";

export const walletsRoutes = Router();

walletsRoutes.get("", verifyAuthTokenMiddleware, listWalletController);
walletsRoutes.post(
  "",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(walletCreateScheama),
  createWalletController
);
