import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className={`w-full max-w-sm space-y-4 rounded-lg bg-gray-100 p-5`}>
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

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Image
            src={"/icons/html-icon.svg"}
            width={20}
            height={20}
            alt="html-icon"
          />
          <span>HTML/CSS</span>
          <span>•</span>
          <Image
            src={"/icons/react-icon.svg"}
            width={20}
            height={20}
            alt="react-icon"
          />
          <span>React</span>
        </div>
      </div>
    </div>
  );
};
