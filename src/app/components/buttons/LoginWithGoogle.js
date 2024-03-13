"use client";

import React from "react";
import { signIn } from "next-auth/react";

const LoginWithGoogle = () => {
  return (
    <button
      className="bg-white shadow text-center w-full py-4"
      onClick={() => signIn("google")}
    >
      icon
      <span> Sign in with google</span>
    </button>
  );
};

export default LoginWithGoogle;
