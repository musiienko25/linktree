"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      className="flex items-center gap-2 border p-2 px-4 shadow"
      onClick={() => signOut()}
    >
      LogoutButton
    </button>
  );
};

export default LogoutButton;
