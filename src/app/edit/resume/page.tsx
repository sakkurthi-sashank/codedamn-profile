import { Interests } from "@/components/Resume/ Interests";
import { AboutMe } from "@/components/Resume/AboutMe";
import { Education } from "@/components/Resume/Education";
import { Language } from "@/components/Resume/Language";
import { TechSkill } from "@/components/Resume/TechSkill";
import { WorkExperience } from "@/components/Resume/WorkExperience";
import React from "react";

export default function ResumePage() {
  return (
    <div className="w-full max-w-4xl space-y-4">
      <AboutMe />
      <WorkExperience />
      <Education />
      <TechSkill />
      <Interests />
      <Language />
    </div>
  );
}
