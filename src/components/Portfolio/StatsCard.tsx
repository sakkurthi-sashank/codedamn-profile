import Image from "next/image";

const StatsCardData = [
  {
    id: 1,
    imgSrc: "/images/stats/lightning.svg",
    title: "2",
    subtitle: "Longest streak",
  },
  {
    id: 2,
    imgSrc: "/images/stats/star.svg",
    title: "1200",
    subtitle: "Experience points",
  },
  {
    id: 3,
    imgSrc: "/images/stats/trophy.svg",
    title: "Novice",
    subtitle: "Current league",
  },
  {
    id: 4,
    imgSrc: "/images/stats/heartbeat.svg",
    title: "120",
    subtitle: "Karma points",
  },
];

export const StatsCard = () => {
  return (
    <>
      <h3 className="py-4 text-xl font-semibold text-gray-800 lg:text-2xl">
        Stats
      </h3>
      <div className="grid grid-cols-2 gap-2 lg:gap-6">
        {StatsCardData.map((statscard) => (
          <article
            key={statscard.id}
            className="flex w-full max-w-sm space-x-1.5 rounded-lg border border-gray-100 bg-gray-50 p-1 lg:space-x-3 lg:p-3"
          >
            <div>
              <Image
                src={statscard.imgSrc}
                alt="Lightning"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h4 className="text-base font-semibold lg:text-xl">
                {statscard.title}
              </h4>
              <p className="truncate text-xs text-gray-600 antialiased lg:text-base">
                {statscard.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
