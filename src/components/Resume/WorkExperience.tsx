import { BsFacebook, BsFillDiamondFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const WorkExperienceData = [
  {
    id: 1,
    company: "Google Inc.",
    icon: <FcGoogle className="h-12 w-12" />,
    location: "London, United Kingdom",
    role: "Front-end developer",
    date: "May 2021 - Present",
    description:
      "This role would be great for a web developer with 3+ years of experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.",
    responsibilities: [],
  },
  {
    id: 2,
    company: "Meta Inc.",
    icon: <BsFacebook className="inline-block h-12 w-12 text-blue-500" />,
    location: "New York",
    role: "Junior Front-end Developer",
    date: "July 2020 - May 2021",
    description:
      "This role would be great for a web developer with 3+ years of experience in designing and developing responsive websites.",
    responsibilities: [
      "Create an appealing design and turn it into a WordPress plugin",
      "Manage all technical aspects of the CMS",
      "Conduct website/application tests",
    ],
  },
];

export const WorkExperience = () => {
  return (
    <section className="my-10 space-y-4">
      <h2 className="text-center text-2xl font-semibold text-gray-800">
        Work experience
      </h2>
      {WorkExperienceData.map((workExperience) => (
        <div className="flex w-full space-x-5 space-y-4 rounded-lg bg-gray-50 p-5">
          <div className="mt-6 flex">{workExperience.icon}</div>
          <div className="flex flex-col space-y-5">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {workExperience.role} at {workExperience.company}
              </h3>
              <div className="flex justify-between text-sm text-gray-700">
                <div className="">{workExperience.location}</div>
                <div className="font-medium">{workExperience.date}</div>
              </div>
            </div>
            <p className="text-gray-500 antialiased">
              {workExperience.description}
            </p>
            {workExperience.responsibilities.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="font-medium">Job responsibilities:</h4>
                <ul className="space-y-1 text-sm text-gray-600 antialiased">
                  {workExperience.responsibilities.map((responsibility) => (
                    <li className="flex items-center space-x-2">
                      <BsFillDiamondFill className="inline-block h-2 w-2 text-indigo-500" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
