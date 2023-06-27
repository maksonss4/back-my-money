import { Request, Response } from "express";
import { listUserService } from "../../services/user/listUser.service";

export const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.json(users);
};
