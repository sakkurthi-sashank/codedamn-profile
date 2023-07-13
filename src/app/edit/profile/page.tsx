"use client";

import { InputField } from "@/components/UI/InputField";
import Image from "next/image";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { ProfileVisibility } from "@/components/ProfileVisibility";

export default function Page() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-3/5 space-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src={"/images/profile-photo.svg"}
          alt="user-profile"
          width={60}
          height={60}
        />

        <button className="h-fit rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white antialiased">
          Upload new picture
        </button>

        <button className="h-fit rounded-xl bg-gray-100 px-4 py-2 font-medium antialiased">
          Delete
        </button>
      </div>

      <div className="w-full pt-10">
        <span className="text-sm font-medium antialiased">Display Name</span>
        <InputField placeholder="Your Name" type="text" />
        <span className="text-sm text-gray-500 antialiased">
          Name entered above will be used for all issued certificates
        </span>
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">About</span>
        <textarea
          placeholder="About you"
          className="w-full rounded-xl border-[0.75px] border-gray-300 font-normal antialiased placeholder:text-gray-500 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">Profession</span>
        <textarea
          placeholder="About you"
          className="w-full rounded-xl border-[0.75px] border-gray-300 font-normal antialiased placeholder:text-gray-500 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">Date of Birth</span>
        <textarea
          placeholder="About you"
          className="w-full rounded-xl border-[0.75px] border-gray-300 font-normal antialiased placeholder:text-gray-500 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">Gender</span>
        <select className="w-full rounded-xl border-[0.75px] border-gray-300 py-2.5 font-normal antialiased focus:border-indigo-600 focus:outline-none">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="w-full pt-4">
        <h2 className="text-lg font-semibold text-gray-800 antialiased">
          Section visibility
        </h2>
        <span className="text-sm text-gray-500">
          Select which sections and content should show on your profile page.
        </span>

        <div className="rounded-lg mt-4 bg-gray-50">
          <ProfileVisibility />
          <ProfileVisibility />
          <ProfileVisibility />
        </div>
      </div>
    </div>
  );
}
