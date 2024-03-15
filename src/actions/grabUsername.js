"use server";

import { Page } from "@/models/Page";

const grabUsername = async (formdata) => {
  console.log({ formdata });
  const username = formData.get("username");
  Mongoose.connect(process.env.MONGO_URL);
  const pageDoc = await Page.create({ uri: username });
  return JSON.parse(JSON.stringify(pageDoc));
};

export default grabUsername;
