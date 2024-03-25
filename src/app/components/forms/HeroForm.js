"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const HeroForm = ({ user }) => {
  const router = useRouter();
  const [username, setUsername] = useState("fdfd");
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + username);
    }
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      // signIn("google", { redirect: "/account?username=" + username });

      if (user) {
        router.push('/account?desiredUsername="' + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="inline-flex flex items-center shadow-lg shadow-gray-500/20"
    >
      <span className="bg-white py-4 pl-4">LinkList.to/</span>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        className="py-4"
        placeholder="username"
      />
      <button type="submit" className="bg-blue-500 text-white p-4 px-6">
        Join for free
      </button>
    </form>
  );
};

export default HeroForm;
