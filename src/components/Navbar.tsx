"use client";

import { usePathname } from "next/navigation";
import { FiChrome } from "react-icons/fi";

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
    <div className="h-fit w-72 max-w-xs space-y-10 rounded-2xl border bg-gray-50 p-6">
      {navLink.map((value) => (
        <div
          className={`flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-gray-900 ${
            path === value.href ? "text-gray-900" : ""
          }`}
          key={value.label}
        >
          <FiChrome className="text-2xl" />
          <span className="text-lg font-medium">{value.label}</span>
        </div>
      ))}
    </div>
  );
};
