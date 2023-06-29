import { Schema, model } from "mongoose";

export const transactionSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default model("Transaction", transactionSchema);
