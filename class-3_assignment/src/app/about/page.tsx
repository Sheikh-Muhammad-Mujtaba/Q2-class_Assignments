import AboutSection from "../components/About_Section";
import SkillSection from "../components/Skill_Section";
import Header from "../components/Nav_bar";
import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className=" mt-4 px-4 py-4 mb-10">
        <AboutSection />
      </div>
      {/* Skills Section */}
      <div>
        <SkillSection />
      </div>
      <footer><Footer /></footer>
    </main>
  );
}
