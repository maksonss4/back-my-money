import { Request, Response } from "express";
import { listUserService } from "../../services/user/listUser.service";

export const listUserController = async (req: Request, res: Response) => {
  const userId = req.userId;
  const user = await listUserService({ userId });
  return res.json(user);
};
