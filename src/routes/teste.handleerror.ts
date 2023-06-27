import { Router } from "express";

export const routerError = Router();

routerError.get("", (req, res, next) => {
  // Causando um erro intencionalmente
  const error = new Error("Erro de exemplo");
  next(error);
});
