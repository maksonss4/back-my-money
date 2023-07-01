import { Router } from "express";
import { listWalletController } from "../controllers/wallet/listWallets.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { createWalletController } from "../controllers/wallet/createWallet.controller";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import {
  walletCreateScheama,
  walletUpdateScheama,
} from "../schemas/wallet.schemas";
import { verifyWalletExistsMiddleware } from "../middlewares/verifyWalletExists.middleware";
import { verifyOwnerWalletMiddleware } from "../middlewares/verifyOwnerWallet.middleware";
import { updateWalletController } from "../controllers/wallet/updateWallet.middleware";
import { deleteWalletController } from "../controllers/wallet/deleteWallet.controller";

export const walletsRoutes = Router();

// listar as wallets do dono do token
walletsRoutes.get("", verifyAuthTokenMiddleware, listWalletController);

// criar wallet
walletsRoutes.post(
  "",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(walletCreateScheama),
  createWalletController
);

// atualizar wallet
walletsRoutes.patch(
  "/:walletId", // wallet id
  verifyAuthTokenMiddleware,
  verifyWalletExistsMiddleware,
  verifyOwnerWalletMiddleware,
  validateSerializerMiddleware(walletUpdateScheama),
  updateWalletController
);

// deletar wallet
walletsRoutes.delete(
  "/:walletId",
  verifyAuthTokenMiddleware,
  verifyWalletExistsMiddleware,
  verifyOwnerWalletMiddleware,
  deleteWalletController
);
