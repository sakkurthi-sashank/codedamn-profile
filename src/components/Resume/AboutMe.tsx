import React from "react";

export const AboutMe = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-center text-2xl font-semibold text-gray-800">
        About me
      </h2>
      <div className="space-y-4 rounded-lg bg-gray-50 p-5">
        <p className="text-gray-500 antialiased">
          A self-driven, versatile, reliable, diligent individual who is calm
          and cheerful with a team-minded approach to work and getting things
          done.
        </p>
        <p className="text-gray-500 antialiased">
          A student who is passionate and with a keen eye for design ...
        </p>
        <button className="rounded-md bg-gray-200 px-3 py-2">Read more</button>
      </div>
    </section>
  );
};
