"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import grabUsername from "@/actions/grabUsername";
import { redirect } from "next/navigation";
import UsernameForm from "../components/forms/UsernameForm";
import { Page } from "@/models/Page";

const AccountPage = async ({ searchParams, ...rest }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    redirect("/");
  }

  mongoose.connect(process.env.MONGO_URL);
  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    return <div>your page is: /{page.uri}</div>;
  }

  return (
    <div>
      account: {session?.user?.name} <br />
      desired username: {desiredUsername}
      <UsernameForm
        grabUsername={grabUsername}
        name={session?.user?.name}
        desiredUsername={desiredUsername}
      />
    </div>
  );
};

export default AccountPage;
