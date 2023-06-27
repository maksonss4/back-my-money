import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { routerError } from "./routes/teste.handleerror";
import { handleError } from "./middlewares/handleError.middleware";

export const app = express();

app.use(express.json());

// routes
app.use("/users", userRoutes);
app.use("/errortest", routerError);

// error handling middleware
app.use(handleError);
