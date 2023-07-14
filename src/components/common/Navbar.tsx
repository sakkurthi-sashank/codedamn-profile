"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiChrome } from "react-icons/fi";

const navLinks = [
  {
    label: "Profile",
    href: "/edit/profile",
  },
  {
    label: "Socials",
    href: "/edit/socials",
  },
  {
    label: "Portfolio",
    href: "/edit/portfolio",
  },
  {
    label: "Resume",
    href: "/edit/resume",
  },
];

export const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className="h-fit w-72 max-w-xs space-y-10 rounded-2xl border bg-gray-50 p-6">
      {navLinks.map((navLink) => (
        <div
          className={`flex cursor-pointer items-center space-x-3 text-gray-500 hover:text-gray-900 ${
            path === navLink.href ? "text-gray-900" : ""
          }`}
          onClick={() => router.push(navLink.href)}
          key={navLink.label}
        >
          <FiChrome className="text-2xl" />
          <span className="text-lg font-medium">{navLink.label}</span>
        </div>
      ))}
    </div>
  );
};
