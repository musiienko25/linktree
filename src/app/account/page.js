import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AccountPage = async () => {
  const session = await getServerSession(authOptions);
  return <div>account {session?.user?.name}</div>;
};

export default AccountPage;
