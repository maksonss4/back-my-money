import { Request, Response, NextFunction } from "express";
import Wallet from "../models/Wallet.model";
import { AppError } from "../error";
import { ObjectId } from "mongodb";

export const verifyWalletExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const walletId = req.params.walletId;

  const isValidId = ObjectId.isValid(walletId);

  if (!isValidId) {
    throw new AppError("Id invalido");
  }

  const wallet = await Wallet.findOne({ _id: walletId });

  if (!wallet) {
    throw new AppError("Não existe uma wallet com esse _id");
  }

  next();
};
