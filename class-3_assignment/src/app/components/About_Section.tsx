"use client"
import React from "react";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF] mix-blend-normal min-h-screen ">
      <section className="mt-0">
        {/* About Me Section */}
        <div className="flex flex-col items-center text-center px-4 py-16 space-y-12">
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
            ABOUT ME
          </button>

          <p className="max-w-2xl text-[20px] sm:text-[16px] lg:text-[20px] leading-[138.68%] text-[#050505]">
            Hello! I'm Sheikh Muhammad Mujtaba Javed, a passionate and driven
            individual with a deep love for technology and creativity. With
            expertise in web development and graphic design, I bring together my
            skills to craft digital experiences that are not only functional but
            also visually compelling.
          </p>

          <Image
            src="/images/image.png"
            alt="svg"
            width={128}
            height={128}
            className="sm:w-36 sm:h-36 lg:w-32 lg:h-32 object-contain"
          />
        </div>
      </section>
      {/* Sections: Experience, Passion and Interests */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        {/* Experience Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Experience
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            I began my professional journey at Promotion Plexus, where I worked
            as a data entry specialist and graphic designer. This role gave me
            valuable experience in handling both technical and creative tasks.
            Now, I'm fully immersed in the freelance world, offering my services
            as both a graphic designer and programmer, delivering customized
            solutions to clients across various industries.
          </p>
        </div>

        {/* Passion and Interests Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Passion and Interests
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            What really excites me is the ever-evolving world of cybersecurity.
            I'm fascinated by the challenges and opportunities it presents and
            am constantly learning to stay ahead in this dynamic field. In
            addition, my interests also span across Web3, AI, and web
            development — technologies that are shaping the future of the
            digital world.
          </p>
        </div>
      </div>
      {/* Hobbies and Motivation Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Hobbies and Motivation
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            When I'm not coding or designing, you’ll find me exploring the great
            outdoors, whether it's through nature walks or keeping up with the
            latest in technology. I'm also an avid football player and enjoy
            spending time improving my coding skills. My hobbies and passions
            keep me motivated, constantly pushing me to sharpen my expertise in
            the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}
