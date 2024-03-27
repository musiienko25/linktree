"use client";

import { signOut } from "next-auth/react";

const LogoutButton = ({
  className = "flex items-center gap-2 border p-2 px-4 shadow",
  iconLeft = false,
}) => {
  return (
    <button className={className} onClick={() => signOut()}>
      LogoutButton
    </button>
  );
};

export default LogoutButton;
