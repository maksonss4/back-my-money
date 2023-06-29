import { Request, Response } from "express";
import { loginUserService } from "../../services/user/loginUser.service";

export const loginUserController = async (req: Request, res: Response) => {
  const { password, email } = req.validatedBody;
  const token = await loginUserService({
    email,
    password,
  });

  return res.json(token);
};
