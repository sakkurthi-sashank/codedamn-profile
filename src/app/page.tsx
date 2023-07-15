"use client";

import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Tab } from "@headlessui/react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { StatsCard } from "@/components/Portfolio/StatsCard";
import { Projects } from "@/components/Portfolio/Project";
import { Playground } from "@/components/Portfolio/Playground";
import { Certificate } from "@/components/Portfolio/Certificate";
import { AboutMe } from "@/components/Resume/AboutMe";
import { WorkExperience } from "@/components/Resume/WorkExperience";
import { Education } from "@/components/Resume/Education";
import { TechSkill } from "@/components/Resume/TechSkill";
import { useRouter } from "next/navigation";
import { Language } from "@/components/Resume/Language";
import { Interests } from "@/components/Resume/ Interests";
import { useEffect, useState } from "react";

const techStack = [
  "HTML 5",
  "CSS3",
  "React",
  "JavaScript",
  "Python",
  "C++",
  "Mongo",
  "Node.js",
];

export default function HomePage() {
  const [socialMedia, setSocialMedia] = useState<
    {
      icon: JSX.Element;
      color: string;
      herf: string | null;
    }[]
  >([]);

  const router = useRouter();

  useEffect(() => {
    const linkedin = localStorage.getItem("profile-linkedin");

    const facebook = localStorage.getItem("profile-facebook");
    const instagram = localStorage.getItem("profile-instagram");

    const socialMedia = [
      {
        icon: <FcGoogle className="inline-block h-6 w-6" />,
        color: "",
        herf: "",
      },
      {
        icon: <AiOutlineInstagram className="inline-block h-6 w-6" />,
        color: "text-fuchsia-500",
        herf: instagram,
      },
      {
        icon: <BsFacebook className="inline-block h-6 w-6" />,
        color: "text-blue-500",
        herf: facebook,
      },
      {
        icon: <AiFillLinkedin className="inline-block h-6 w-6" />,
        color: "text-blue-500",
        herf: linkedin,
      },
      {
        icon: <AiFillYoutube className="inline-block h-6 w-6" />,
        color: "text-red-500",
        herf: "",
      },
    ];

    setSocialMedia(socialMedia);
  }, []);

  return (
    <div className="mx-auto my-8 max-w-4xl px-3">
      <div className="relative">
        <div
          className="min-h-[100px] w-full rounded-t-lg lg:min-h-[200px]"
          style={{
            backgroundImage: `url('/images/profile-background-image.svg')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute bottom-[-40%] left-6 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/images/profile-photo.svg"
              alt="Profile Photo"
              width={150}
              height={150}
              className="h-24 w-24 rounded-full border-2 border-white lg:h-36 lg:w-36"
            />
            <span
              style={{
                backgroundImage: `url('/icons/polygon.svg')`,
                backgroundSize: "cover",
              }}
              className="absolute bottom-[-20px] right-[-20px] flex h-8 w-8 items-center justify-center p-10 text-sm text-white"
            >
              5
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-1 rounded-b-md border px-3 py-6 pt-14 lg:pl-52 lg:pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-semibold">Anna Cheng</h2>
          <div className="rounded-md bg-lime-400 px-2.5 py-0.5 text-sm font-medium">
            Pro
          </div>
          <div className="rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
            Looking for a job
          </div>
        </div>
        <p className="text-gray-500 antialiased">
          Full stack dev at codedamn | Harvard&apos;22&apos;
        </p>
        <div className="flex items-center text-gray-500">
          <IoLocationOutline className="mr-1 inline-block antialiased" />
          Mumbai, India
        </div>

        <div className="flex flex-wrap items-center gap-5 border-b py-10">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-md bg-gray-200 px-3 py-1.5 text-sm text-gray-800"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-3">
          <div className="flex flex-wrap gap-5 py-6">
            {socialMedia.map((socialMediaLink, index) => (
              <div
                key={index}
                onClick={() => {
                  if (socialMediaLink.herf) {
                    router.push(socialMediaLink.herf);
                  }
                }}
                className={`flex cursor-pointer items-center justify-center rounded-lg border p-2 ${socialMediaLink.color}`}
              >
                {socialMediaLink.icon}
              </div>
            ))}
          </div>
          <button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-800">
            Follow
          </button>
        </div>
      </div>

      <Tab.Group defaultIndex={0}>
        <Tab.List className="my-10 space-x-4 rounded-lg border px-3 py-2">
          <Tab
            className={({ selected }) =>
              `${
                selected
                  ? "bg-indigo-50 text-indigo-600"
                  : "bg-gray-100 text-gray-700"
              } rounded-md px-5 py-2 text-sm font-medium outline-none`
            }
          >
            Portfolio
          </Tab>
          <Tab
            className={({ selected }) =>
              `${
                selected
                  ? "bg-indigo-50 text-indigo-600"
                  : "bg-gray-100 text-gray-700"
              } rounded-md px-5 py-2 text-sm font-medium outline-none`
            }
          >
            Resume
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <StatsCard />
            <Projects />
            <Playground />
            <Certificate />
          </Tab.Panel>

          <Tab.Panel>
            <AboutMe />
            <WorkExperience />
            <Education />
            <TechSkill />
            <Interests />
            <Language />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
