import { model, models, Schema } from "mongoose";

const PageSchema = new Schema(
  {
    username: { type: String, required: true, min: 1, unique: true }, // змінено username на uri
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

export const Page = models?.Page || model("Page", PageSchema);
