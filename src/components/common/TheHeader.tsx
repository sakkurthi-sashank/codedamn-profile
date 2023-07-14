"use client";

import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { HiBolt } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { InputField } from "./InputField";
import { useRouter } from "next/navigation";

export const TheHeader = () => {
  const router = useRouter();

  return (
    <div className="flex h-20 items-center justify-between px-6">
      <div className="w-full">
        <Image
          src={"/images/code-damn.svg"}
          alt={"Code Damn"}
          width={120}
          height={120}
          priority={false}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="relative hidden w-full sm:block">
        <InputField placeholder="Search" type="text" className="w-full pl-12" />
        <AiOutlineSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
      </div>

      <div className="flex w-full items-center justify-end space-x-8 lg:space-x-10">
        <div className="flex items-center space-x-1 text-gray-600">
          <HiBolt className="h-6 w-6 fill-indigo-600" />
          <span className="font-semibold">2</span>
        </div>

        <div className="relative">
          <IoNotificationsOutline className="h-6 w-6 text-gray-600" />
          <span className="absolute right-0 top-[-5px] flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[0.65rem] font-semibold text-white">
            1
          </span>
        </div>

        <div className="relative">
          <Image
            src={"/images/profile-photo.svg"}
            className="inline h-10 w-10 rounded-full object-cover"
            alt="user-profile"
            width={40}
            height={40}
          />
          <span
            style={{
              backgroundImage: `url('/icons/polygon.svg')`,
              backgroundSize: "cover",
            }}
            className="absolute right-[-20px] top-[-20px] flex h-5 w-5 items-center justify-center object-contain p-6 text-xs text-white"
          >
            5
          </span>
        </div>
      </div>
    </div>
  );
};
