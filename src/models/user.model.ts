import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

export const UserModel = mongoose.model("User", UserScheme);
