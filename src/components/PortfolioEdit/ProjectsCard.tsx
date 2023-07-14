import Image from "next/image";

export const ProjectsCard = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div
      className={`w-full max-w-sm space-y-4 rounded-lg bg-gray-100 p-5 ${
        isActive ? "border-2 border-indigo-500 bg-indigo-50 " : ""
      }`}
    >
      <Image
        src={"/images/portfolio-demo-image.svg"}
        alt="portfolio-demo-image"
        width={368}
        height={300}
      />

      <div className="space-y-3">
        <div className="text-xl font-medium tracking-wide text-gray-800">
          Personal Portfolio Website
        </div>
        <div className="space-x-2 text-sm text-gray-500">
          <span>HTML/CSS</span>
          <span>•</span>
          <span>Javascript</span>
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
          <span className="text-sm text-gray-500">3 contributors</span>
        </div>
      </div>
    </div>
  );
};
