import { Switch } from "@headlessui/react";
import { useState } from "react";

export const ProfileVisibility = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex w-full items-center justify-between p-4">
      <div>
        <div className="text-base font-semibold text-gray-800">
          Followers and following
        </div>
        <span className="text-sm text-gray-600">
          Shows your followers and the users you follow on codedamn
        </span>
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
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
