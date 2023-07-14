import { InputField } from "@/components/common/InputField";

export default function SocialPage() {
  return (
    <div className="w-full max-w-4xl space-y-4">
      <div className="w-full">
        <label
          htmlFor="github"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          GitHub
        </label>
        <InputField id="github" type="text" placeholder="GitHub profile URL" />
      </div>

      <div className="w-full">
        <label
          htmlFor="linkedin"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          LinkedIn
        </label>
        <InputField
          id="linkedin"
          type="text"
          placeholder="LinkedIn profile URL"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="twitter"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          Twitter
        </label>
        <InputField
          id="twitter"
          type="text"
          placeholder="Twitter profile URL"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="facebook"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          Facebook
        </label>
        <InputField
          id="facebook"
          type="text"
          placeholder="Facebook profile URL"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="instagram"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          Instagram
        </label>
        <InputField
          id="instagram"
          type="text"
          placeholder="Instagram profile URL"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="dribbble"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          Dribbble
        </label>
        <InputField
          id="dribbble"
          type="text"
          placeholder="Dribbble profile URL"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="behance"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          Behance
        </label>
        <InputField
          id="behance"
          type="text"
          placeholder="Behance profile URL"
        />
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
