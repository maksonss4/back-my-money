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
import { deleteUserController } from "../controllers/user/deleteUser.controller";

export const userRoutes = Router();

// Listar usuário dono do token
userRoutes.get("", verifyAuthTokenMiddleware, listUserController);

// Criar usuário
userRoutes.post(
  "",
  validateSerializerMiddleware(userCreateScheama),
  emailAlreadyRegisteredMiddleware,
  createUserController
);

// Login do usuário
userRoutes.post(
  "/login",
  validateSerializerMiddleware(userLoginSchema),
  loginUserController
);

// Atualizar dados do usuário
userRoutes.patch(
  "",
  verifyAuthTokenMiddleware,
  validateSerializerMiddleware(userUpdateScheama),
  updateUserController
);

// Deletar usuário (apagar conta)
userRoutes.delete("", verifyAuthTokenMiddleware, deleteUserController);
