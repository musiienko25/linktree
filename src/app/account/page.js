"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import grabUsername from "@/actions/grabUsername";
import { redirect } from "next/navigation";
import UsernameForm from "../components/forms/UsernameForm";

const AccountPage = async ({ searchParams, ...rest }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    redirect("/");
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
