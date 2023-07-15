"use client";

import { InputField } from "@/components/common/InputField";
import { useEffect, useState } from "react";

export default function SocialPage() {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [dribbble, setDribbble] = useState("");
  const [behance, setBehance] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("profile-github", github);
    localStorage.setItem("profile-linkedin", linkedin);
    localStorage.setItem("profile-twitter", twitter);
    localStorage.setItem("profile-facebook", facebook);
    localStorage.setItem("profile-instagram", instagram);
    localStorage.setItem("profile-dribbble", dribbble);
    localStorage.setItem("profile-behance", behance);
  };

  useEffect(() => {
    setGithub(localStorage.getItem("profile-github") || "");
    setLinkedin(localStorage.getItem("profile-linkedin") || "");
    setTwitter(localStorage.getItem("profile-twitter") || "");
    setFacebook(localStorage.getItem("profile-facebook") || "");
    setInstagram(localStorage.getItem("profile-instagram") || "");
    setDribbble(localStorage.getItem("profile-dribbble") || "");
    setBehance(localStorage.getItem("profile-behance") || "");
  }, []);

  return (
    <div className="w-full max-w-4xl space-y-4">
      <div className="w-full">
        <label
          htmlFor="github"
          className="text-sm font-semibold text-gray-600 antialiased"
        >
          GitHub
        </label>
        <InputField
          id="github"
          type="text"
          placeholder="GitHub profile URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
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
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
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
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
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
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
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
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
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
          value={dribbble}
          onChange={(e) => setDribbble(e.target.value)}
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
          value={behance}
          onChange={(e) => setBehance(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4">
        <button className="rounded-md bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 antialiased">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white antialiased"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
