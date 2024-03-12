"use client";

import LoginWithGoogle from "../components/buttons/LoginWithGoogle";

const LoginPage = () => {
  return (
    <div className="bg-white border p-4 max-w-xs mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">Sign in</h1>
      <p className="text-center mb-6 text-gray-500">
        Sign in to your account usign one of the methods below
      </p>
      <div>
        {" "}
        <LoginWithGoogle />
      </div>
    </div>
  );
};

export default LoginPage;
