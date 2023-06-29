import { Request, Response } from "express";
import { listWalletService } from "../../services/wallet/listWallet.service";

export const listWalletController = async (req: Request, res: Response) => {
  const userId = req.userId;
  const wallets = await listWalletService({ userId });
  return res.json(wallets);
};
