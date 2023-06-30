import { Request, Response } from "express";
import { updateWalletService } from "../../services/wallet/updateWallet.service";

export const updateWalletController = async (req: Request, res: Response) => {
  const walletId = req.params.walletId;
  const { name } = req.validatedBody;
  const updatedWallet = await updateWalletService({ walletId, name });

  return res.json({ updated: true, updatedWallet });
};
