import Image from "next/image";

export const PlaygroundCard = () => {
  return (
    <div
      className={`relative flex max-w-sm items-center justify-around rounded-md bg-gray-100 px-3 py-5`}
    >
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
