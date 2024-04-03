"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function grabUsername(formData) {
  const username = formData.get("username");
  console.log(username);
  if (!username) {
    throw new Error("No username provided");
  }

  mongoose.connect(process.env.MONGO_URL);
  console.log(username);
  const existingPageDoc = await Page.findOne({ uri: username });
  console.log(existingPageDoc);
  if (existingPageDoc) {
    console.log(existingPageDoc, "existingPageDoc");
    return false;
  } else {
    console.log("no");
    const session = await getServerSession(authOptions);
    return await Page.create({
      uri: username,
      owner: session?.user?.email,
    });
  }
}
