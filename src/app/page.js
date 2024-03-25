import { SessionProvider } from "next-auth/react";
import HeroForm from "./components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  const session = getServerSession(authOptions);
  return (
    <main>
      <section className=" pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        {/* <SessionProvider> */} <HeroForm user={session?.user} />
        {/* </SessionProvider> */}
      </section>
    </main>
  );
}
