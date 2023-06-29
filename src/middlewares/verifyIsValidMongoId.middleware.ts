import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { ObjectId } from "mongodb";

export const verifyIsValidMongoId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mongoId = req.params.id;

  const isValidId = ObjectId.isValid(mongoId);

  if (!isValidId) {
    throw new AppError("Id invalido");
  }

  next();
};
