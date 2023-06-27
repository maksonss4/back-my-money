import { Request, Response } from "express";
import { listUserService } from "../../services/user/listUser.service";

export async function listUserController(req: Request, res: Response) {
  const users = await listUserService();
  return res.send(users).json();
}
