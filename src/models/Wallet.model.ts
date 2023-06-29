import { Schema, model } from "mongoose";
import { transactionSchema } from "./Transaction.model";

const walletSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: String,
    gastos: [transactionSchema],
    ganhos: [transactionSchema],
  },
  {
    timestamps: true,
  }
);

export default model("Wallet", walletSchema);
