import Image from "next/image";

export const PortfolioPlaygroundCard = ({
  isActive,
}: {
  isActive?: boolean;
}) => {
  return (
    <div
      className={`relative flex max-w-sm items-center justify-around rounded-md px-3 py-5 ${
        isActive ? "border-2 border-indigo-500 bg-indigo-50 " : "bg-gray-100"
      }`}
    >
      <div
        className={`absolute right-2.5 top-2.5 h-4 w-4 rounded-full bg-white ${
          isActive ? "border-4 border-indigo-500" : "border border-gray-200"
        }`}
      ></div>

      <div>
        <Image
          src={"/icons/html-icon.svg"}
          width={50}
          height={50}
          alt="profile"
        />
      </div>

      <div className="space-y-2.5">
        <div className="text-xl font-medium tracking-wide text-gray-800">
          Playground title
        </div>
        <div className="space-x-2 text-sm text-gray-500">
          <span>HTML/CSS</span>
          <span>•</span>
          <span>1 min ago</span>
        </div>
        <div className="flex space-x-2">
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
          <span className="text-sm text-gray-600">
            Shared with Adam, Anna.. +7 more
          </span>
        </div>
      </div>
    </div>
  );
};
