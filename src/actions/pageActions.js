"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

const savePageSettings = async (formData) => {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);

  if (session) {
    const displayName = formData.get("displayName");
    const location = formData.get("location");
    const bio = formData.get("bio");
    Page.updateOne(
      { owner: session?.user?.email },
      { displayName, location, bio }
    );
  }
  return true;
};

export default savePageSettings;
