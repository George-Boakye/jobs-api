import mongoose from "mongoose";

const { model, Schema } = mongoose;

const jobsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Array, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);



export default model("Jobs", jobsSchema)
