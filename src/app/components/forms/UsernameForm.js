"use client";

import RightIcon from "../icons/RightIcon";
import { useFormState } from "react-dom";

export default function UsernameForm({ grabUsername, name, desiredUsername }) {
  const [state] = useFormState(grabUsername);
  return (
    <form onSubmit={grabUsername}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab yours username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        {" "}
        <input
          name={name}
          className="block p-2 px mx-auto border w-full mb-2"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center"
          type="submit"
        >
          <span>Claim username</span>
          <RightIcon />
        </button>
      </div>
    </form>
  );
}
