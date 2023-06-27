import * as yup from "yup";
import bcrypt from "bcrypt";
// import { IUserCreate } from "../interfaces/users.interfaces";

export const userCreateScheama = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .transform((_: string, originalValue: string) =>
      originalValue.toLowerCase().trim()
    ),
  name: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required(),
  password: yup
    .string()
    .required()
    .transform((_: string, originalValue: string) =>
      bcrypt.hashSync(originalValue, 10)
    ),
});
