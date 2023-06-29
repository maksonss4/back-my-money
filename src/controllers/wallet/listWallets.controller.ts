import { Request, Response } from "express";
import { listWalletService } from "../../services/wallet/listWallet.service";

export const listWalletController = async (req: Request, res: Response) => {
  const wallets = await listWalletService();
  return res.json(wallets);
};
