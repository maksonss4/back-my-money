import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";

export async function createUserController(req: Request, res: Response) {
  const { age, lastName, name, password, email } = req.body;
  const newUser = await createUserService({
    email,
    name,
    lastName,
    age,
    password,
  });

  return res.send({ created: true, newUser }).json();
}
