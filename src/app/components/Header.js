import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 border-b py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex gap-6 px-8">
          <Link href={"/"}>LinkList</Link>
          <nav className="flex items-center gap-2 text-gray-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricitng"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex gap-3 text-sm text-slate-500">
          <Link href={"/login"}>Sign in</Link>
          <Link href={"/register"}>Create account</Link>
        </nav>
      </div>
    </header>
  );
}
