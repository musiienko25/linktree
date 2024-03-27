"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../buttons/LogoutButton";

const AppSidebar = ({ session }) => {
  const path = usePathname();
  return (
    <aside className="bg-white w-48 p-4 shadow">
      <div className="rounded-full overflow-hidden w-24 mx-auto aspec-square">
        <Image
          src={session.user.image}
          alt={"avatar"}
          width={256}
          height={256}
        />
      </div>
      <nav className="flex flex-col text-center mt-8 gap-4">
        <Link
          href={"/account"}
          className={
            "flex gap-4" + path === "/account" ? "ss" : "text-blue-500"
          }
        >
          <span>My page</span>
        </Link>
        <Link href={"/analytics"}>Analytics</Link>

        <LogoutButton className={"flex gap-4 item-center pt-4"} />
      </nav>
    </aside>
  );
};

export default AppSidebar;
