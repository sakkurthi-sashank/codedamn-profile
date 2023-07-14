import Image from "next/image";

const languages = [
  {
    icon: "/icons/languageIcon/usa-icon.svg",
    title: "English",
  },
  {
    icon: "/icons/languageIcon/taiwan-icon.svg",
    title: "Mandarin",
  },
  {
    icon: "/icons/languageIcon/china-icon.svg",
    title: "Cantonese Chinese",
  },
];

export const Language = () => {
  return (
    <section className="my-10 space-y-4">
      <h2 className="text-start text-2xl font-semibold text-gray-800">
        Languages
      </h2>
      <div className="flex flex-wrap gap-6">
        {languages.map((language) => (
          <div
            key={language.title}
            className="flex items-center space-x-3 rounded-md border border-gray-200 bg-gray-100 px-4 py-2"
          >
            <Image
              src={language.icon}
              alt="Language Icon"
              width={22}
              height={22}
            />
            <span className="font-medium text-gray-800">{language.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
