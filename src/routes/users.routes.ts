import { Router } from "express";
import { createUserController } from "../controllers/user/create";
import { listUserController } from "../controllers/user/list";

export const userRoutes = Router();

userRoutes.get("", listUserController);

userRoutes.post("", createUserController);
