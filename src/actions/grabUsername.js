"use server";

import { Page } from "@/models/Page";
import mongoose from "mongoose";
const grabUsername = async (formData) => {
  const username = formData.get("username");

  mongoose.connect(process.env.MONGO_URL);
  const pageDoc = await Page.create({ username });
  return JSON.parse(JSON.stringify(pageDoc));
};

export default grabUsername;
