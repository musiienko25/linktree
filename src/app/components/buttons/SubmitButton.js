import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, className = "" }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={
        "bg-blue-500 disabled:bg-blue-200 text-white disabled:text-gray-200 py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center" +
        className
      }
      type="submit"
      disabled={pending}
    >
      {pending && <span>Saving...</span>}
      {!pending && children}
    </button>
  );
}
