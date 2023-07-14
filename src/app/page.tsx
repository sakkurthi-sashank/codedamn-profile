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
import { BsFacebook, BsFillDiamondFill } from "react-icons/bs";
import { StatsCard } from "@/components/StatsCard";
import { ProjectCard } from "@/components/Portfolio/ProjectCard";
import { PlaygroundCard } from "@/components/Portfolio/PlaygroundCard";
import { CertificateCard } from "@/components/Portfolio/CertificateCard";

const languages = [
  {
    icon: "/icons/languageIcon/usa-icon.svg",
    title: "English",
  },
  {
    icon: "/icons/languageIcon/taiwan-icon.svg",
    title: "Mandarin",
  },
  {
    icon: "/icons/languageIcon/china-icon.svg",
    title: "Cantonese Chinese",
  },
];

const techStack = [
  "HTML 5",
  "CSS3",
  "React",
  "Javascript",
  "Python",
  "C++",
  "Mongo",
  "Node Js",
];

const interests = ["Semantics", "TED Talks", "Blogging", "Udemy", "Behavioral"];

const techSkills = [
  {
    icon: "/icons/html-icon.svg",
    title: "HTML 5",
  },
  {
    icon: "/icons/css-icon.svg",
    title: "CSS 3",
  },
  {
    icon: "/icons/react-icon.svg",
    title: "React",
  },
  {
    icon: "/icons/javascript-icon.svg",
    title: "Javascript",
  },
  {
    icon: "/icons/python-icon.svg",
    title: "Python",
  },
  {
    icon: "/icons/nextjs-icon.svg",
    title: "Next Js",
  },
  {
    icon: "/icons/mongo-icon.svg",
    title: "Mongo",
  },
  {
    icon: "/icons/node-icon.svg",
    title: "Node Js",
  },
  {
    icon: "/icons/java-icon.svg",
    title: "Java",
  },
];

const socialMediaLinks = [
  {
    icon: <FcGoogle className="inline-block h-6 w-6" />,
    color: "",
  },
  {
    icon: <AiOutlineInstagram className="inline-block h-6 w-6" />,
    color: "text-fuchsia-500",
  },
  {
    icon: <BsFacebook className="inline-block h-6 w-6" />,
    color: "text-blue-500",
  },
  {
    icon: <AiFillLinkedin className="inline-block h-6 w-6" />,
    color: "text-blue-500",
  },
  {
    icon: <AiFillYoutube className="inline-block h-6 w-6" />,
    color: "text-red-500",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto mt-8 max-w-4xl ">
      <div className="relative">
        <div
          className="min-h-[200px] w-full"
          style={{
            backgroundImage: `url('/images/profile-background-image.svg')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute bottom-[-40%] left-6 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/images/profile-photo.svg"
              alt="Picture of the author"
              width={150}
              height={150}
              className="rounded-full border-2 border-white"
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

      <div className="space-y-1 rounded-b-md border py-6 pl-52">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-semibold">Anna Cheng</div>
          <div className="rounded-md bg-lime-400 px-2.5 py-0.5 text-sm font-medium">
            Pro
          </div>
          <div className="rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-600">
            Looking for a job
          </div>
        </div>
        <div className="text-gray-500 antialiased">
          Full stack dev at codedamn | Harvard’22”
        </div>
        <div className="flex items-center text-gray-400">
          <IoLocationOutline className="mr-1 inline-block" />
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
          <div className="flex space-x-5 py-6">
            {socialMediaLinks.map((socialMediaLink) => (
              <div
                key={socialMediaLink.color}
                className={`flex items-center justify-center rounded-lg border p-2 ${socialMediaLink.color}`}
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

      <Tab.Group defaultIndex={1}>
        <Tab.List className="my-10 space-x-4 rounded-lg border px-3 py-2">
          <Tab className="rounded-md px-5 py-2 text-sm font-medium outline-none ui-selected:bg-indigo-50 ui-selected:text-indigo-600 ui-not-selected:bg-gray-100 ui-not-selected:text-gray-700">
            Portfolio
          </Tab>
          <Tab className="rounded-md px-5 py-2 text-sm font-medium outline-none ui-selected:bg-indigo-50 ui-selected:text-indigo-600 ui-not-selected:bg-gray-100 ui-not-selected:text-gray-700">
            Resume
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <h3 className="py-4 text-2xl font-semibold text-gray-800">Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <StatsCard
                imgSrc="/images/stats/lightning.svg"
                title="2"
                subtitle="Longest streak"
              />
              <StatsCard
                imgSrc="/images/stats/star.svg"
                title="1200"
                subtitle="Experience points"
              />
              <StatsCard
                imgSrc="/images/stats/trophy.svg"
                title="Novice"
                subtitle="Current league"
              />
              <StatsCard
                imgSrc="/images/stats/heartbeat.svg"
                title="120"
                subtitle="Karma points"
              />
            </div>

            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl font-semibold text-gray-800">Projects</h3>
              <div className="cursor-pointer text-lg text-indigo-600">
                Create new Project
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>

            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Playgrounds
              </h3>
              <div className="cursor-pointer text-lg text-indigo-600">
                Create new Playground
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PlaygroundCard />
              <PlaygroundCard />
              <PlaygroundCard />
              <PlaygroundCard />
            </div>

            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Certificates
              </h3>
              <div className="cursor-pointer text-lg text-indigo-600">
                Add new Certificate
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <CertificateCard />
              <CertificateCard />
              <CertificateCard />
              <CertificateCard />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="space-y-4">
              <h3 className="text-center text-2xl font-semibold text-gray-800">
                About me
              </h3>
              <div className="space-y-4 rounded-lg bg-gray-50 p-5">
                <div className="text-gray-500 antialiased">
                  A self-driven, versatile, reliable, diligent individual who is
                  calm and cheerful with a team-minded approach to work and
                  getting things done.
                </div>
                <div className="text-gray-500 antialiased">
                  A student who is passionate and with a keen eye for design ...
                </div>
                <button className="rounded-md bg-gray-200 px-3 py-2">
                  Read more
                </button>
              </div>
            </div>

            <div className="my-10 space-y-4">
              <h3 className="text-center text-2xl font-semibold text-gray-800">
                Work experience
              </h3>
              <div className="flex w-full space-x-5 space-y-4 rounded-lg bg-gray-50 p-5">
                <div className="mt-6 flex">
                  <FcGoogle className="h-12 w-12" />
                </div>
                <div className="flex w-full flex-col space-y-5">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-800">
                      Front-end developer at Google
                    </div>
                    <div className="flex w-full justify-between text-sm text-gray-700">
                      <div className="">
                        London, United Kingdom • Google Inc.
                      </div>
                      <div className="font-medium">May 2021 - Present</div>
                    </div>
                  </div>
                  <div className="text-gray-500 antialiased">
                    This role would be great for a web developer with 3+ years
                    experience in designing and developing responsive websites.
                    This position requires a profound understanding of the
                    development process, using front-end technologies including
                    HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.
                  </div>
                </div>
              </div>
              <div className="flex w-full space-x-5 space-y-4 rounded-lg bg-gray-50 p-5">
                <div className="mt-6 flex">
                  <BsFacebook className="inline-block h-12 w-12 text-blue-500" />
                </div>
                <div className="flex w-full flex-col space-y-5">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-800">
                      Junior Front-end Developer at Meta
                    </div>
                    <div className="flex w-full justify-between text-sm text-gray-700">
                      <div className="">New York • Meta Inc.</div>
                      <div className="font-medium">July 2020 - May 2021</div>
                    </div>
                  </div>
                  <div className="text-gray-500 antialiased">
                    This role would be great for a web developer with 3+ years
                    experience in designing and developing responsive websites.
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-medium">Job responsibilities:</div>
                    <ul className="space-y-1 text-sm text-gray-600 antialiased">
                      <li className="flex items-center space-x-2">
                        <BsFillDiamondFill className="inline-block h-2 w-2 text-indigo-500" />
                        <span>
                          Create an appealing design and turn it into a
                          WordPress plugin
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <BsFillDiamondFill className="inline-block h-2 w-2 text-indigo-500" />
                        <span>Manage all technical aspects of the CMS</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <BsFillDiamondFill className="inline-block h-2 w-2 text-indigo-500" />
                        <span>Conducting website/application tests</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-10 space-y-4">
              <h3 className="text-start text-2xl font-semibold text-gray-800">
                Education
              </h3>
              <div className="flex w-full items-start space-x-5 space-y-4 rounded-lg bg-gray-50 p-5">
                <Image
                  src="/icons/harvard-icon.svg"
                  alt="Picture of the author"
                  className="mt-6 inline-block"
                  width={50}
                  height={50}
                />
                <div className="flex w-full flex-col space-y-5">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-800">
                      Harvard university
                    </div>
                    <div className="flex w-full justify-between text-sm text-gray-700">
                      <div className="">
                        Cambridge, GA • Bachelor degree, Computer Science(Bsc)
                      </div>
                      <div className="font-medium">May 2020 - Present</div>
                    </div>
                  </div>
                  <div className="text-gray-500 antialiased">
                    Emory Admissions Fellow; assisted Dean of Admissions with
                    student applications and Emory’s marketing strategy in the
                    roll out of the university’s new website
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center space-x-5 space-y-4 rounded-lg bg-gray-50 p-5">
                <Image
                  src="/icons/harvard-icon.svg"
                  alt="Picture of the author"
                  className="mt-6 inline-block"
                  width={50}
                  height={50}
                />
                <div className="flex w-full flex-col space-y-5">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-800">
                      Mister Bim High School
                    </div>
                    <div className="flex w-full justify-between text-sm text-gray-700">
                      <div className="">Atlanta, GA</div>
                      <div className="font-medium">July 2016 - May 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-10 space-y-4">
              <h3 className="text-start text-2xl font-semibold text-gray-800">
                Tech skills
              </h3>
              <div className="flex flex-wrap gap-6">
                {techSkills.map((techSkill) => (
                  <div
                    key={techSkill.title}
                    className="flex w-fit items-center space-x-3 rounded-md border border-gray-200 bg-gray-100 px-4 py-2"
                  >
                    <Image
                      src={techSkill.icon}
                      alt="Picture of the author"
                      width={22}
                      height={22}
                    />
                    <span className="font-medium text-gray-800">
                      {techSkill.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-10 space-y-4">
              <h3 className="text-start text-2xl font-semibold text-gray-800">
                Interests
              </h3>
              <div className="flex flex-wrap gap-6">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-800"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            <div className="my-10 space-y-4">
              <h3 className="text-start text-2xl font-semibold text-gray-800">
                Languages
              </h3>
              <div className="flex flex-wrap gap-6">
                {languages.map((language) => (
                  <div
                    key={language.title}
                    className="flex w-fit items-center space-x-3 rounded-md border border-gray-200 bg-gray-100 px-4 py-2"
                  >
                    <Image
                      src={language.icon}
                      alt="Picture of the author"
                      width={22}
                      height={22}
                    />
                    <span className="font-medium text-gray-800">
                      {language.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
