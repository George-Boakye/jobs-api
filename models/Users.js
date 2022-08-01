import mongoose from "mongoose";
const { model, Schema } = mongoose;

// user schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    phoneNumber: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

//user model
export default model("Users", userSchema);
