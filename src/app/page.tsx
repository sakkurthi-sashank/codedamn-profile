import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { StatsCard } from "@/components/StatsCard";

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
            <div className="flex items-center justify-center rounded-lg border p-2">
              <FcGoogle className="inline-block h-6 w-6" />
            </div>
            <div className="flex items-center justify-center rounded-lg border p-2">
              <AiOutlineInstagram className="inline-block h-6 w-6 text-fuchsia-700" />
            </div>
            <div className="flex items-center justify-center rounded-lg border p-2">
              <BsFacebook className="inline-block h-6 w-6 text-blue-700" />
            </div>
            <div className="flex items-center justify-center rounded-lg border p-2">
              <AiFillLinkedin className="inline-block h-6 w-6 text-blue-700" />
            </div>
            <div className="flex items-center justify-center rounded-lg border p-2">
              <AiFillYoutube className="inline-block h-6 w-6 text-red-600" />
            </div>
          </div>
          <button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-800">
            Follow
          </button>
        </div>
      </div>

      <div className="my-10 space-x-4 rounded-lg border px-3 py-2">
        <button className="rounded-md bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700">
          Portfolio
        </button>
        <button className="rounded-md bg-indigo-100 px-5 py-2 text-sm font-medium text-indigo-600">
          Resume
        </button>
      </div>

      <div>
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
      </div>
    </div>
  );
}
