import Image from "next/image";

const EducationData = [
  {
    icon: "/icons/harvard-icon.svg",
    school: "Harvard University",
    location: "Cambridge, GA • Bachelor's degree, Computer Science (BSc)",
    date: "May 2020 - Present",
    description:
      "Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the rollout of the university’s new website",
  },
  {
    icon: "/icons/harvard-icon.svg",
    school: "Mister Bim High School",
    location: "Atlanta, GA",
    date: "July 2016 - May 2020",
    description: "",
  },
];

export const Education = () => {
  return (
    <section className="my-10 space-y-4">
      <h2 className="text-start text-2xl font-semibold text-gray-800">
        Education
      </h2>
      {EducationData.map((education) => (
        <article
          key={education.school}
          className="flex w-full items-start space-x-5 space-y-4 rounded-lg bg-gray-50 p-5"
        >
          <Image
            src={education.icon}
            alt="University Icon"
            className="mt-6 inline-block"
            width={50}
            height={50}
          />
          <div className="flex flex-col space-y-5">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {education.school}
              </h3>
              <div className="flex justify-between text-sm text-gray-700">
                <div className="">{education.location}</div>
                <div className="font-medium">{education.date}</div>
              </div>
            </div>
            <p className="text-gray-500 antialiased">{education.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
