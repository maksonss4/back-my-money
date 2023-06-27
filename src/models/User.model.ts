import mongoose from "mongoose";

const { Schema, model } = mongoose;

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
      select: false, // não será retornado nas consultas
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Ativa os timestamps automáticos
  }
);

export default model("User", userSchema);
