"use server";
const grabUsername = async (formdata) => {
  console.log({ formdata });
  const username = formData.get("username");
  // Mongoose.connect(process.env.MONGO_URL);
  return await Page.create({ uri: username });
};

export default grabUsername;
