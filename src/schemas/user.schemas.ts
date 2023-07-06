import * as yup from "yup";
import bcrypt from "bcrypt";
import { encryptedWithBcrypt } from "../utils";

export const userCreateScheama = yup.object().shape({
  email: yup
    .string()
    .email()
    .transform((_: string, originalValue: string) =>
      originalValue.toString().toLowerCase().trim()
    )
    .required(),
  name: yup
    .string()
    .required()
    .min(2, "name must have a minimum length of 2 characters")
    .transform((_: string, originalValue: string) =>
      originalValue.toString().trim()
    ),
  lastName: yup
    .string()
    .required()
    .min(2, "lastname must have a minimum length of 2 characters")
    .transform((_: string, originalValue: string) =>
      originalValue.toString().trim()
    ),
  age: yup
    .number()
    .integer("age must be an integer")
    .typeError("age must be a number")
    .required()
    .min(1, "age must be greater than or equal to 1"),
  password: yup
    .string()
    .min(4, "password must have a minimum length of 4 characters")
    .required()
    .transform((_: string, originalValue: string) =>
      originalValue.toString().trim().length >= 4
        ? encryptedWithBcrypt(originalValue.toString().trim())
        : originalValue.toString().trim()
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

export const userUpdateScheama = yup.object().shape({
  email: yup
    .string()
    .email()
    .transform((_: string, originalValue: string) =>
      originalValue.toString().toLowerCase().trim()
    )
    .notRequired(),
  name: yup
    .string()
    .transform((_: string, originalValue: string) =>
      originalValue.toString().trim()
    )
    .notRequired(),
  lastName: yup
    .string()
    .transform((_: string, originalValue: string) =>
      originalValue.toString().trim()
    )
    .notRequired(),
  age: yup
    .number()
    .notRequired()
    .positive("O campo value deve ser um número positivo"),
  password: yup
    .string()
    .notRequired()
    .transform((_: string, originalValue: string) =>
      bcrypt.hashSync(originalValue.toString(), 10)
    ),
});
