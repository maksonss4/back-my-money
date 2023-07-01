import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.userId;
  await deleteUserService({ userId });

  return res.json({
    success: true,
    message: "User deleted successfully",
  });
};
