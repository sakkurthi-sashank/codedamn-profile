import Image from "next/image";

const ProjectData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    technology: [
      {
        id: 1,
        name: "HTML/CSS",
        icon: "/icons/html-icon.svg",
      },
      {
        id: 2,
        name: "React",
        icon: "/icons/react-icon.svg",
      },
    ],
    image: "/images/portfolio-demo-image.svg",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    technology: [
      {
        id: 1,
        name: "HTML/CSS",
        icon: "/icons/html-icon.svg",
      },
      {
        id: 2,
        name: "React",
        icon: "/icons/react-icon.svg",
      },
    ],
    image: "/images/portfolio-demo-image.svg",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    technology: [
      {
        id: 1,
        name: "HTML/CSS",
        icon: "/icons/html-icon.svg",
      },
      {
        id: 2,
        name: "React",
        icon: "/icons/react-icon.svg",
      },
    ],
    image: "/images/portfolio-demo-image.svg",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    technology: [
      {
        id: 1,
        name: "HTML/CSS",
        icon: "/icons/html-icon.svg",
      },
      {
        id: 2,
        name: "React",
        icon: "/icons/react-icon.svg",
      },
    ],
    image: "/images/portfolio-demo-image.svg",
  },
];

export const Projects = () => {
  return (
    <>
      <header className="flex items-center justify-between py-8">
        <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">
          Projects
        </h3>
        <div className="cursor-pointer text-base text-indigo-600 lg:text-lg">
          Create new Project
        </div>
      </header>
      <div className="grid grid-cols-2 gap-2 lg:gap-6">
        {ProjectData.map((project) => (
          <article
            key={project.id}
            className="w-full max-w-sm space-y-4 rounded-lg bg-gray-100 p-2 lg:p-5"
          >
            <Image
              src={project.image}
              alt="portfolio-demo-image"
              width={368}
              height={300}
            />

            <div className="space-y-3">
              <h4 className="text-base font-medium tracking-wide text-gray-800 lg:text-xl">
                {project.title}
              </h4>

              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                {project.technology.map((tech) => (
                  <div className="flex items-center gap-1">
                    <Image
                      src={tech.icon}
                      width={20}
                      height={20}
                      alt="html-icon"
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
