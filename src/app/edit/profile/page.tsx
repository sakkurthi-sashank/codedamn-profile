"use client";

import { useEffect, useState } from "react";
import { InputField } from "@/components/common/InputField";
import Image from "next/image";
import { ProfileVisibility } from "@/components/ProfileEdit/ProfileVisibility";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [profession, setProfession] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setDisplayName(localStorage.getItem("profile-display-name") || "");
    setAbout(localStorage.getItem("profile-about") || "");
    setProfession(localStorage.getItem("profile-profession") || "");
    setDateOfBirth(localStorage.getItem("profile-date-of-birth") || "");
    setGender(localStorage.getItem("profile-gender") || "");
  }, []);

  const handleImageChangeToLocalStorage = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target?.result as string;
        localStorage.setItem("profile-image", image);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("profile-display-name", displayName);
    localStorage.setItem("profile-about", about);
    localStorage.setItem("profile-profession", profession);
    localStorage.setItem("profile-date-of-birth", dateOfBirth);
    localStorage.setItem("profile-gender", gender);
  };

  return (
    <div className="w-full max-w-4xl space-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src={image ? URL.createObjectURL(image) : "/images/profile-photo.svg"}
          alt="user-profile"
          className="rounded-full"
          width={60}
          height={60}
        />

        <label className="h-fit rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white antialiased">
          Upload new picture
          <input
            type="file"
            className="hidden"
            onChange={handleImageChangeToLocalStorage}
          />
        </label>

        <button className="h-fit rounded-xl bg-gray-100 px-4 py-2 font-medium antialiased">
          Delete
        </button>
      </div>

      <div className="w-full pt-10">
        <span className="text-sm font-medium antialiased">Display Name</span>
        <InputField
          placeholder="Your Name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <span className="text-sm text-gray-500 antialiased">
          Name entered above will be used for all issued certificates
        </span>
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">About</span>
        <textarea
          placeholder="About you"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full rounded-xl border-[0.75px] border-gray-300 font-normal antialiased placeholder:text-gray-500 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">Profession</span>
        <textarea
          placeholder="Your profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="w-full rounded-xl border-[0.75px] border-gray-300 font-normal antialiased placeholder:text-gray-500 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">Date of Birth</span>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="w-full rounded-xl border-[0.75px] border-gray-300 py-2.5 font-normal antialiased focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div className="w-full">
        <span className="text-sm font-medium antialiased">Gender</span>
        <select
          className="w-full rounded-xl border-[0.75px] border-gray-300 py-2.5 font-normal antialiased focus:border-indigo-600 focus:outline-none"
          value={gender}
          onChange={(e) => {
            console.log(e.target.value);
            setGender(e.target.value);
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="w-full pt-4">
        <h2 className="text-lg font-semibold text-gray-800 antialiased">
          Section visibility
        </h2>
        <span className="text-sm text-gray-500">
          Select which sections and content should show on your profile page.
        </span>

        <div className="mt-4 rounded-lg bg-gray-50">
          <ProfileVisibility
            label="Followers and following"
            description="Shows your followers and the users you follow on codedamn"
          />
          <ProfileVisibility
            label="XP"
            description="Shows the XP you have earned"
          />
          <ProfileVisibility
            label="Achievement badges"
            description="Shows your relative percentile and proficiency"
          />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4">
        <button className="rounded-md bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 antialiased">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white antialiased"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Page;
