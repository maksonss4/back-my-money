import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require: true,
      select: false,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
