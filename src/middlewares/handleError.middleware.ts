import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const handleError = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.error(error);
  return res.status(500).json({ message: "Internal Server Error." });
};
