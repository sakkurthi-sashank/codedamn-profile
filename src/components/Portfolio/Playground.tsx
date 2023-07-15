import Image from "next/image";

const PlaygroundData = [
  {
    id: 1,
    title: "Playground title",
    technology: "HTML/CSS",
    shared: "1 min ago",
    icon: "/icons/html-icon.svg",
  },
  {
    id: 2,
    title: "Playground title",
    technology: "HTML/CSS",
    shared: "1 min ago",
    icon: "/icons/html-icon.svg",
  },
  {
    id: 3,
    title: "Playground title",
    technology: "HTML/CSS",
    shared: "1 min ago",
    icon: "/icons/html-icon.svg",
  },
  {
    id: 4,
    title: "Playground title",
    technology: "HTML/CSS",
    shared: "1 min ago",
    icon: "/icons/html-icon.svg",
  },
];

export const Playground = () => {
  return (
    <>
      <header className="flex items-center justify-between py-8">
        <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">
          Playgrounds
        </h3>
        <div className="cursor-pointer text-base text-indigo-600 lg:text-lg">
          Create new Playground
        </div>
      </header>
      <div className="grid grid-cols-1 place-items-center gap-2 sm:grid-cols-2 lg:gap-6">
        {PlaygroundData.map((playground) => (
          <article
            key={playground.id}
            className={`relative flex w-full max-w-sm flex-wrap items-center justify-around gap-2 rounded-md bg-gray-100 px-3 py-5`}
          >
            <div>
              <Image
                src={playground.icon}
                width={50}
                height={50}
                alt="profile"
              />
            </div>

            <div className="space-y-2.5">
              <h4 className="text-base font-medium tracking-wide text-gray-800 lg:text-xl">
                {playground.title}
              </h4>
              <div className="space-x-2 text-xs text-gray-500 lg:text-sm">
                <span>{playground.technology}</span>
                <span>•</span>
                <span>{playground.shared}</span>
              </div>
              <div className="flex space-x-3">
                <div className="flex">
                  <Image
                    src={"/images/profile-photo.svg"}
                    width={20}
                    height={20}
                    alt="profile"
                  />
                  <Image
                    src={"/images/profile-photo-2.svg"}
                    width={20}
                    height={20}
                    className="-ml-2"
                    alt="profile"
                  />
                </div>
                <span className="text-xs text-gray-600 lg:text-sm">
                  Shared with Adam, Anna.. +7 more
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
