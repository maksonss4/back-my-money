import { Request, Response } from "express";
import { deleteWalletService } from "../../services/wallet/deleteWallet.service";

export const deleteWalletController = async (req: Request, res: Response) => {
  const walletId = req.params.walletId;
  await deleteWalletService({ walletId });

  return res.json({
    success: true,
    message: "Wallet deleted successfully",
  });
};
