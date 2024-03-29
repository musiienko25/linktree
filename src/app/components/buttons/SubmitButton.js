import React from "react";
import RightIcon from "../icons/RightIcon";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, className = "" }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={
        "bg-blue-500 disabled:bg-blue-200 text-white disabled:text-gray-200 py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center" +
        className
      }
      type="submit"
      // disabled={pending}
    >
      <span>{children}</span>
      <RightIcon />
    </button>
  );
};

export default SubmitButton;
