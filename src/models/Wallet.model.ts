import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { transactionSchema } from "./Transaction.model";

const walletSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: String,
    transactions: [transactionSchema],
  },
  {
    timestamps: true,
  }
);

export default model("Wallet", walletSchema);
