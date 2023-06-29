import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const { age, lastName, name, password, email } = req.validatedBody;
  const newUser = await createUserService({
    email,
    name,
    lastName,
    age,
    password,
  });

  return res.json({ created: true, newUser });
};
