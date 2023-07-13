import React, { InputHTMLAttributes } from "react";

export const InputField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="rounded-xl font-normal antialiased w-full border-[0.75px] border-gray-300 focus:outline-none placeholder:text-gray-500 focus:border-indigo-600"
    />
  );
};
