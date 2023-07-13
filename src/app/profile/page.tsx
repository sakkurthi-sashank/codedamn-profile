import { Navbar } from "@/components/Navbar";
import { InputField } from "@/components/UI/InputField";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex p-4 w-full mt-10">
      <Navbar />
      <div className="w-3/5 mx-auto space-y-12">
        <div className="flex space-x-4 items-center">
          <Image
            src={"/images/profile-photo.svg"}
            alt="user-profile"
            width={60}
            height={60}
          />

          <button className="bg-indigo-600 antialiased font-medium h-fit px-4 py-2 text-white rounded-xl">
            Upload new picture
          </button>

          <button className="bg-gray-100 antialiased font-medium h-fit px-4 rounded-xl py-2">
            Delete
          </button>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-medium antialiased">Display Name</span>
          <InputField placeholder="Your Name" type="text" />
          <span className="text-sm text-gray-500">
            Name entered above will be used for all issued certificates
          </span>
        </div>
      </div>
    </div>
  );
}
