import { Inter } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Toaster } from "react-hot-toast";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import AppSidebar from "../components/layout/AppSidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AppTemplate({ children, ...res }) {
  const headerList = headers();
  console.log(headers());
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  // console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <main className="flex min-h-screen">
          <AppSidebar session={session} />
          {/* <Header /> */}
          <div className="w-[70%]" iconLeft={true}>
            <div className="bg-white m-8 p-4 shadow w-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
