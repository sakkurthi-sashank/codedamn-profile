"use client";

import { usePathname } from "next/navigation";

const navLink = [
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Socials",
    href: "/socials",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Resume",
    href: "/resume",
  },
];

export const Navbar = () => {
  const path = usePathname();

  return (
    <div className="max-w-xs p-6 space-y-10 w-2/5 rounded-2xl border bg-gray-50 h-fit mx-auto">
      {navLink.map((value) => (
        <div
          className={`text-gray-500 flex space-x-3 cursor-pointer hover:text-gray-900 ${
            path === value.href ? "text-gray-900" : ""
          }`}
          key={value.label}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M12 9h8.4"></path>
            <path d="M14.598 13.5l-4.2 7.275"></path>
            <path d="M9.402 13.5l-4.2 -7.275"></path>
          </svg>
          <span className="font-medium text-lg">{value.label}</span>
        </div>
      ))}
    </div>
  );
};
