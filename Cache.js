import { Schema, model } from "mongoose";
const Cache = new Schema({
  prompt: String,
  answer: String,
  createdAt: { type: Date, expires: "2m", default: Date.now },
});

export default model("Cache", Cache);