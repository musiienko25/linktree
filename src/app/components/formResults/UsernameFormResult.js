import grabUsername from "@/actions/grabUsername";
import { useFormState } from "react-dom";

const UserNameFormResult = () => {
  const [state] = useFormState(grabUsername, {});
  console.log(state);
  return (
    <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
      Taken username
    </div>
  );
};

export default UserNameFormResult;
