import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="bg-gray-200 border-b flex justify-between p-4">
        <div className="flex gap-4">
          <Link href={"/"}>LinkList</Link>
          <nav className="flex gap-2 text-gray-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricitng"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div>
          <Link href={"/login"}>Sign in</Link>
          <Link href={"/register"}>Create account</Link>
        </div>
      </header>
      test
      <section></section>
    </main>
  );
}
