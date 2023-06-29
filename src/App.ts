import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { routerError } from "./routes/teste.handleerror";
import { handleError } from "./middlewares/handleError.middleware";
import { walletsRoutes } from "./routes/wallets.routes";
import { transactionRoutes } from "./routes/transaction.routes";

export const app = express();

app.use(express.json());

// routes
app.use("/users", userRoutes);
app.use("/wallets", walletsRoutes);
app.use("/errortest", routerError);
app.use("/transactions", transactionRoutes);

// error handling middleware
app.use(handleError);
