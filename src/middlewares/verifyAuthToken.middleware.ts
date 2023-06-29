import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error";

export const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing authorization headers", 400);
  }

  const newToken = token.split(" ")[1];

  if (!newToken) {
    throw new AppError("Invalid token");
  }

  jwt.verify(
    newToken,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, decoded: any) => {
      if (!decoded) {
        console.log("decoded: " + decoded);
        console.log("err: ", err);
        throw new AppError("Invalid token");
      }
      req.userId = decoded._id;
      req.isPremium = decoded.isPremium;
      return next();
    }
  );
};
