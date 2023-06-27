require("dotenv").config();
import { AppError } from "../../error";
import { IUserLogin } from "../../interfaces/users.interfaces";
import User from "../../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUserService = async ({ email, password }: IUserLogin) => {
  const userExists = await User.findOne({ email }).select("+password");

  if (!userExists) {
    throw new AppError("wrong email or password", 404);
  }

  const user = userExists.toObject();
  const encryptedPassword = user.password!;
  const isPasswordCorrect = await bcrypt.compare(password, encryptedPassword);

  if (!isPasswordCorrect) {
    throw new AppError("wrong email or password", 404);
  }

  delete user.password;

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
