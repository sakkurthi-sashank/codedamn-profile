"use client";

import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

export const ProfileVisibility = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  const handleProfileVisibility = () => {
    localStorage.setItem(`profile-visibility${label}`, `${!enabled}`);
    setEnabled(!enabled);
  };

  useEffect(() => {
    setEnabled(
      localStorage.getItem(`profile-visibility${label}`) === "true"
        ? true
        : false,
    );
  }, []);

  return (
    <div className="flex w-full items-center justify-between p-4">
      <div>
        <div className="text-base font-semibold text-gray-800">{label}</div>
        <span className="text-sm text-gray-600">{description}</span>
      </div>
      <Switch
        checked={enabled!}
        onChange={handleProfileVisibility}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};
