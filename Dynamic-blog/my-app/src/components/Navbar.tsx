"use client";

import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "./UI/Darkmode-button";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); 
  };

  return (
    <nav className="flex flex-row justify-between items-center px-0 py-[10px] gap-[14px] w-[84.444vw] h-[60px]">
      {/* Logo */}
      <h1 className="m-0 w-[131px] h-[24px] font-semibold text-[20px] leading-[24px] text-[#1A1A1A] dark:text-white">
        Your Name
      </h1>

      {/* Hamburger Button (Visible on small screens) */}
      <button
        className="block md:hidden text-[20px] dark:text-white"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute md:static left-0 top-[80px] w-full md:max-w-[496px] flex-col md:flex-row md:flex justify-center md:justify-end items-center gap-[14px] bg-white dark:bg-[#090D1F] md:bg-transparent font-normal text-[20px] leading-[24px] text-[#1A1A1A] dark:text-white`}
      >
        <Link
          href="/#"
          id="l1"
          onClick={() => handleClick("#l1")}
          className={`w-[fit-content] h-[24px] ${
            activeLink === "#l1"
              ? "border-b-2 border-[solid] border-[#000000] dark:border-[#FFFFFF]"
              : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/projects"
          id="l2"
          onClick={() => handleClick("#l2")}
          className={`w-[fit-content] h-[24px] ${
            activeLink === "#l2"
              ? "border-b-2 border-[solid] border-[#000000] dark:border-[#FFFFFF]"
              : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          id="l3"
          onClick={() => handleClick("#l3")}
          className={`w-[fit-content] h-[24px] ${
            activeLink === "#l3"
              ? "border-b-2 border-[solid] border-[#000000] dark:border-[#FFFFFF]"
              : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/newsletter"
          id="l4"
          onClick={() => handleClick("#l4")}
          className={`w-[fit-content] h-[24px] ${
            activeLink === "#l4"
              ? "border-b-2 border-[solid] border-[#000000] dark:border-[#FFFFFF]"
              : ""
          }`}
        >
          Newsletter
        </Link>

        <DarkModeToggle />
      </div>
    </nav>
  );
}