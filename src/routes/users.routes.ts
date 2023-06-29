import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { listUserController } from "../controllers/user/listUser.controller";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import {
  userCreateScheama,
  userLoginSchema,
  userUpdateScheama,
} from "../schemas/user.schemas";
import { emailAlreadyRegisteredMiddleware } from "../middlewares/emailAlreadyRegistered.middleware";
import { loginUserController } from "../controllers/user/loginUser.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { updateUserController } from "../controllers/user/updateUser.controller";

export const userRoutes = Router();

userRoutes.get("", verifyAuthTokenMiddleware, listUserController);

userRoutes.post(
  "",
  validateSerializerMiddleware(userCreateScheama),
  emailAlreadyRegisteredMiddleware,
  createUserController
);

userRoutes.post(
  "/login",
  validateSerializerMiddleware(userLoginSchema),
  loginUserController
);

userRoutes.patch(
  "",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(userUpdateScheama),
  updateUserController
);
