import Image from "next/image";

export const CertificateCard = () => {
  return (
    <div
      className={`relative flex max-w-sm flex-col space-y-3 rounded-md bg-gray-100 px-4 py-5`}
    >
      <div>
        <Image
          src={"/icons/html-icon.svg"}
          width={40}
          height={40}
          alt="profile"
        />
      </div>

      <div className="space-y-2.5">
        <div className="text-xl font-medium tracking-wide text-gray-800">
          Playground title
        </div>
        <div className="text-sm text-gray-500">Issued on Dec 16th, 2022</div>
        <span className="text-sm font-medium text-gray-600">
          See credentials
        </span>
      </div>
    </div>
  );
};
