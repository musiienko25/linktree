import React from "react";
import RadioTogglers from "../formItems/radioTogglers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

const PageSettingsForm = async ({ page }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="-m-4">
      <form>
        <div className="bg-gray-300 h-32 flex justify-center items-center">
          <RadioTogglers
            selected="color"
            options={[
              { value: "color", icon: "faPalette", label: "Color" },
              { value: "image", icon: "faPalette", label: "Image" },
            ]}
            onChange={() => {}}
          />
        </div>
      </form>
      <div className="flex justify-center">
        <Image
          className="rounded-full relative -top-8"
          src={session?.user?.image}
          alt={"avatar"}
          width={128}
          height={128}
        />
      </div>
    </div>
  );
};

export default PageSettingsForm;
