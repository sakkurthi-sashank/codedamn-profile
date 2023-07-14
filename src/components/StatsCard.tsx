import Image from "next/image";

export const StatsCard = ({
  title,
  imgSrc,
  subtitle,
}: {
  title: string;
  imgSrc: string;
  subtitle: string;
}) => {
  return (
    <div className="flex w-full max-w-sm space-x-3 rounded-lg border border-gray-100 bg-gray-50 p-3">
      <div>
        <Image src={imgSrc} alt="Lightning" width={50} height={50} />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-gray-600 antialiased">{subtitle}</span>
      </div>
    </div>
  );
};
