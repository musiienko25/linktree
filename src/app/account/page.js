import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      account: {session?.user?.name} <br />
      desired username: {desiredUsername}
      <form>
        <h1 className="text-4xl font-bold text-center mb-2">
          Grab yours username
        </h1>
        <p className="text-center mb-6 text-gray-500">Choose your username</p>
        <div className="max-w-xs mx-auto">
          {" "}
          <input
            className="block p-2 px mx-auto border w-full mb-2"
            defaultValue={desiredUsername}
            type="text"
            placeholder="username"
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full"
            type="submit"
          >
            Claim username
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountPage;
