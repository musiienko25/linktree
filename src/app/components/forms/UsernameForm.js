"use client";

import { useState } from "react";

import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

export default function UsernameForm({ grabUsername, name, desiredUsername }) {
  const [taken, setTaken] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  async function handleSubmit(formData) {
    setIsloading(true);
    const result = await grabUsername(formData);
    // setIsloading(false);

    setTaken(result === false);

    if (result) {
      redirect("/account?created=" + formData.get("username"));
    }
  }
  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab yours username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        {" "}
        <input
          name="username"
          className="block p-2 px mx-auto border w-full mb-2"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username"
        />
        {taken && <UserNameFormResult />}
        {isLoading ? "loading..." : "not loading"}
        <SubmitButton>Claim</SubmitButton>
      </div>
    </form>
  );
}
