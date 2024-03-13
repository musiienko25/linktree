import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-gray-200 border-b py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex items-center gap-6 px-8">
          <Link href={"/"} className="flex items-center gap-2 text-blue-500">
            <span className="font-bold">LinkList</span>
          </Link>
          <nav className="flex items-center gap-2 text-gray-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricitng"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-3 text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              {" "}
              <Link href={"/login"}>Sign in</Link>
              <Link href={"/register"}>Create account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
