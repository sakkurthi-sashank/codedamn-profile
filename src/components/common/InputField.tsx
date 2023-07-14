import React, { InputHTMLAttributes } from "react";

export const InputField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border-[0.75px] border-gray-300 font-normal antialiased placeholder:text-gray-500 focus:border-indigo-600 focus:outline-none ${props.className}`}
    />
  );
};
