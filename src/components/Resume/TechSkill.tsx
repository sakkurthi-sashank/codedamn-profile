import Image from "next/image";

const techSkills = [
  {
    icon: "/icons/html-icon.svg",
    title: "HTML 5",
  },
  {
    icon: "/icons/css-icon.svg",
    title: "CSS 3",
  },
  {
    icon: "/icons/react-icon.svg",
    title: "React",
  },
  {
    icon: "/icons/javascript-icon.svg",
    title: "JavaScript",
  },
  {
    icon: "/icons/python-icon.svg",
    title: "Python",
  },
  {
    icon: "/icons/nextjs-icon.svg",
    title: "Next.js",
  },
  {
    icon: "/icons/mongo-icon.svg",
    title: "MongoDB",
  },
  {
    icon: "/icons/node-icon.svg",
    title: "Node.js",
  },
  {
    icon: "/icons/java-icon.svg",
    title: "Java",
  },
];

export const TechSkill = () => {
  return (
    <section className="my-10 space-y-4">
      <h2 className="text-start text-2xl font-semibold text-gray-800">
        Tech skills
      </h2>
      <div className="flex flex-wrap gap-6">
        {techSkills.map((techSkill) => (
          <div
            key={techSkill.title}
            className="flex items-center space-x-3 rounded-md border border-gray-200 bg-gray-100 px-4 py-2"
          >
            <Image
              src={techSkill.icon}
              alt="Technology Icon"
              width={22}
              height={22}
            />
            <span className="font-medium text-gray-800">{techSkill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
