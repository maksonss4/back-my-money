import * as yup from "yup";
import bcrypt from "bcrypt";

export const userCreateScheama = yup.object().shape({
  email: yup
    .string()
    .required()
    .email()
    .transform((_: string, originalValue: string) =>
      originalValue.toLowerCase().trim()
    ),
  name: yup
    .string()
    .transform((_: string, originalValue: string) => originalValue.trim())
    .required(),
  lastName: yup
    .string()
    .transform((_: string, originalValue: string) => originalValue.trim())
    .required(),
  age: yup
    .number()
    .required()
    .positive("O campo value deve ser um número positivo"),
  password: yup
    .string()
    .required()
    .transform((_: string, originalValue: string) =>
      bcrypt.hashSync(originalValue, 10)
    ),
});

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email()
    .transform((_: string, originalValue: string) =>
      originalValue.toLowerCase().trim()
    ),
  password: yup.string().required(),
});
