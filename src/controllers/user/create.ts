import { Request, Response } from "express";
import { createUserService } from "../../services/user/create";

export async function createUserController(req: Request, res: Response) {
  const { name, age } = req.body;
  const newUser = await createUserService({ age, name });

  return res.send({ created: true, newUser }).json();
}
