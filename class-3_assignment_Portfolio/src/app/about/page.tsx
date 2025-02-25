import AboutSection from "../components/About_Section";
import SkillSection from "../components/Skill_Section";
import React from "react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className=" mt-4 px-4 py-4 mb-10">
        <AboutSection />
      </div>
      {/* Skills Section */}
      <div>
        <SkillSection />
      </div>
    </main>
  );
}
