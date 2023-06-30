import { Schema, model } from "mongoose";

export const transactionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    walletId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    transactionDate: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Transaction", transactionSchema);
