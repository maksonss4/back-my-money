import * as yup from "yup";

export const walletCreateScheama = yup.object().shape({
  name: yup
    .string()
    .transform((_: string, originalValue: string) => originalValue.trim())
    .required(),
});

export const walletUpdateScheama = yup.object().shape({
  name: yup
    .string()
    .transform((_: string, originalValue: string) => originalValue.trim())
    .notRequired(),
});
