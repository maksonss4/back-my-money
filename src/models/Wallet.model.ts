import { Schema, model } from "mongoose";

const walletSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: String,
    moneyIn: [
      {
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
    ],
    moneyOut: [
      {
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
    ],
  },
  {
    timestamps: true,
  }
);

export default model("Wallet", walletSchema);
