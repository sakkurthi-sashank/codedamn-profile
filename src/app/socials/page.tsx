import { Navbar } from "@/components/Navbar";
import { InputField } from "@/components/UI/InputField";
import React from "react";

export default function SocialPage() {
  return (
    <div className="flex p-4 w-full mt-10">
      <Navbar />
      <div className="w-3/5 mx-auto space-y-4">
        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            GitHub
          </span>
          <InputField type="text" placeholder="GitHub profile URL" />
        </div>

        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            LinkedIn
          </span>
          <InputField type="text" placeholder="LinkedIn profile URL" />
        </div>

        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            Twitter
          </span>
          <InputField type="text" placeholder="Twitter profile URL" />
        </div>

        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            Facebook
          </span>
          <InputField type="text" placeholder="Facebook profile URL" />
        </div>

        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            Instagram
          </span>
          <InputField type="text" placeholder="Instagram profile URL" />
        </div>

        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            Dribbble
          </span>
          <InputField type="text" placeholder="Dribbble profile URL" />
        </div>

        <div className="w-full">
          <span className="font-semibold text-sm text-gray-600 antialiased">
            Behance
          </span>
          <InputField type="text" placeholder="Behance profile URL" />
        </div>

        <div className="space-x-4 flex pt-4 justify-end items-center">
          <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-md font-semibold text-sm antialiased">
            Cancel
          </button>
          <button className="px-6 py-2 text-sm bg-indigo-600 text-white rounded-md font-semibold antialiased">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
