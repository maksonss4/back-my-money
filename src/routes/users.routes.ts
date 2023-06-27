import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { listUserController } from "../controllers/user/listUser.controller";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { userCreateScheama } from "../schemas/user.schemas";

export const userRoutes = Router();

userRoutes.get("", listUserController);

userRoutes.post(
  "",
  validateSerializerMiddleware(userCreateScheama),
  createUserController
);
