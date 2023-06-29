import { Request, Response } from "express";
import { createWalletService } from "../../services/wallet/createWallet.service";

export const createWalletController = async (req: Request, res: Response) => {
  const { userId, isPremium } = req;
  const { name } = req.validatedBody;
  const newWallet = await createWalletService({ userId, isPremium, name });

  return res.json({ created: true, newWallet });
};
