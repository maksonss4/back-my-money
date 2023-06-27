import { app } from "./App";
import mongoose from "mongoose";

const PORT = 3000;

(async () => {
  mongoose
    .connect(
      "mongodb+srv://makson:2lLRFTTjNwfXYeg3@cluster0.bhqd1j5.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Mongoose connected"))
    .catch((error) => console.log("Mongoose error", error));

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
})();
