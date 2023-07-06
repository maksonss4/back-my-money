import bcrypt from "bcrypt";

export const encryptedWithBcrypt = (text: string) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  return bcrypt.hashSync(text, salt);
};
