import { Request, Response, NextFunction } from "express";
import User from "../models/User.model";
import { AppError } from "../error";

export const emailAlreadyRegisteredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newEmail = req.body.email;

  const existingUser = await User.findOne({ email: newEmail });

  if (existingUser) {
    throw new AppError("Email already registered");
  }

  next();
};
