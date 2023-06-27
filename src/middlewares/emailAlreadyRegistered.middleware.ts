import { Request, Response, NextFunction } from "express";
import User from "../models/User.model";

export const emailAlreadyRegisteredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newEmail = req.body.email;

  try {
    const existingUser = await User.findOne({ email: newEmail });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
