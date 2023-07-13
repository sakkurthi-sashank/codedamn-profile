import { InputField } from "@/components/UI/InputField";

export default function SocialPage() {
  return (
    <div className="w-full max-w-4xl space-y-4">
      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          GitHub
        </span>
        <InputField type="text" placeholder="GitHub profile URL" />
      </div>

      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          LinkedIn
        </span>
        <InputField type="text" placeholder="LinkedIn profile URL" />
      </div>

      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          Twitter
        </span>
        <InputField type="text" placeholder="Twitter profile URL" />
      </div>

      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          Facebook
        </span>
        <InputField type="text" placeholder="Facebook profile URL" />
      </div>

      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          Instagram
        </span>
        <InputField type="text" placeholder="Instagram profile URL" />
      </div>

      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          Dribbble
        </span>
        <InputField type="text" placeholder="Dribbble profile URL" />
      </div>

      <div className="w-full">
        <span className="text-sm font-semibold text-gray-600 antialiased">
          Behance
        </span>
        <InputField type="text" placeholder="Behance profile URL" />
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4">
        <button className="rounded-md bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 antialiased">
          Cancel
        </button>
        <button className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white antialiased">
          Save changes
        </button>
      </div>
    </div>
  );
}
