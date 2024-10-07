"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import BackToTopButton from "@/components/BackToTopButton";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-black py-8 px-4 text-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-6">
          <Link href="https://github.com/Sheikh-Muhammad-Mujtaba" aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-gray-200 p-3 rounded-full text-4xl"
          >
            <FaGithub />
          </Link>
          <Link href="mailto:smujtabaja@gmail.com"
            aria-label="Email"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-gray-200 p-3 rounded-full text-4xl"
          >
            <FaEnvelope />
          </Link>

          <Link href="https://www.instagram.com/sheikh_zada.official/"
            aria-label="Instagram Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-pink-600 text-gray-200 p-3 rounded-full text-4xl"
          >
            <FaInstagram />
          </Link>

          <Link href="https://www.linkedin.com/in/sheikh-m-mujtaba-javed-0362872b9/"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-500 text-gray-200 p-3 rounded-full text-4xl"
          >
            <FaLinkedin />
          </Link>
        </div>

        <BackToTopButton />

        <div>
          <ul>
            <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Rights Reserved */}
        <p className="text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Sheikh Muhammad Mujtaba Javed | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
