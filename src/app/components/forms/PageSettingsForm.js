"use client";

import React from "react";
import RadioTogglers from "../formItems/radioTogglers";

import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import toast from "react-hot-toast";
import savePageSettings from "@/actions/pageActions";

const PageSettingsForm = async ({ page, user }) => {
  // const session = await getServerSession(authOptions);
  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);

    if (result) {
      toast.success("Saved");
    }
  }

  return (
    <div className="-m-4">
      <form action={saveBaseSettings}>
        <div className="bg-gray-300 h-32 flex justify-center items-center">
          <RadioTogglers
            defaultValue={page.bgType}
            selected="color"
            options={[
              { value: "color", icon: "faPalette", label: "Color" },
              { value: "image", icon: "faPalette", label: "Image" },
            ]}
            onChange={() => {}}
          />
        </div>

        <div>
          <input type="color" />
        </div>

        <div className="flex justify-center -mb-12">
          <Image
            className="rounded-full relative -top-8 border border-white shadow-lg shadow-black/50"
            src={user?.image}
            alt={"avatar"}
            width={128}
            height={128}
          />
        </div>
        <div className="p-4">
          <label htmlFor="nameIn" className="input-label">
            Display name
          </label>
          <input
            type="text"
            id="nameIn"
            placeholder="John doe"
            defaultValue={page?.displayName}
          />
          <label htmlFor="locationIn" className="input-label">
            Location
          </label>
          <input
            type="text"
            id="locationIn"
            name="location"
            placeholder="Somewhere in the world"
            defaultValue={page?.location}
          />
          <label htmlFor="bioIn" className="input-label"></label>
          <textarea
            name="bio"
            defaultValue={page?.bio}
            id="bioIn"
            placeholder="Your bio goes here..."
          ></textarea>
          <div className="max-w-[200px] mx-auto">
            {" "}
            <SubmitButton className="max-w-sm"> Save</SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
