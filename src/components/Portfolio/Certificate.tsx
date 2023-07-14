import Image from "next/image";

const CertificateData = [
  {
    id: 1,
    title: "Advanced theoretical Javascript",
    issued: "Dec 16th, 2022",
    icon: "/icons/javascript-icon.svg",
  },
  {
    id: 2,
    title: "HTML/CSS",
    issued: "Dec 16th, 2022",
    icon: "/icons/html-icon.svg",
  },
  {
    id: 3,
    title: "React",
    issued: "Dec 16th, 2022",
    icon: "/icons/react-icon.svg",
  },
  {
    id: 4,
    title: "Build a decentralized to-do application",
    issued: "Dec 16th, 2022",
    icon: "/icons/javascript-icon.svg",
  },
];

export const Certificate = () => {
  return (
    <>
      <header className="flex items-center justify-between py-8">
        <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">
          Certificates
        </h3>
        <div className="cursor-pointer text-base text-indigo-600 lg:text-lg">
          Add new Certificate
        </div>
      </header>
      <div className="grid grid-cols-2 gap-6">
        {CertificateData.map((certificate) => (
          <article
            key={certificate.id}
            className={`relative flex max-w-sm flex-col space-y-3 rounded-md bg-gray-100 px-4 py-5`}
          >
            <div>
              <Image
                src={certificate.icon}
                width={40}
                height={40}
                alt="profile"
              />
            </div>

            <div className="space-y-2">
              <h4 className="truncate text-base font-medium tracking-wide text-gray-800 lg:text-lg">
                {certificate.title}
              </h4>
              <p className="truncate text-sm text-gray-500">
                Issued on {certificate.issued}
              </p>
              <span className="text-sm font-medium text-gray-600">
                See credential
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
