import * as yup from "yup";

export const transactionCreateSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .transform((_, originalValue) => originalValue.trim()),
  type: yup
    .string()
    .required()
    .transform((_, originalValue) => originalValue.trim())
    .test("valid-type", "O campo type deve ser 'in' ou 'out'", (value) =>
      ["in", "out"].includes(value)
    ),
  value: yup
    .number()
    .required()
    .positive("O campo value deve ser um número positivo"),
  description: yup.string().required(),
  transactionDate: yup.date().required(),
});
