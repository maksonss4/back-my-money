import { Request, Response, NextFunction } from "express";
import Wallet from "../models/Wallet.model";
import { AppError } from "../error";

export const verifyOwnerWalletMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const walletId = req.params.walletId;
  const userId = req.userId;
  const wallet = await Wallet.findOne({ _id: walletId });

  if (wallet!.userId !== userId) {
    throw new AppError("Sem autorização. Dono do token não é dono da walletId");
  }

  next();
};
