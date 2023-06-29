import { Request, Response } from "express";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  const { email, name, lastName, age, password } = req.validatedBody;
  const userId = req.userId;
  const userUpdated = await updateUserService({
    userId,
    email,
    name,
    lastName,
    age,
    password,
  });

  return res.json({ updated: true, userUpdated });
};
