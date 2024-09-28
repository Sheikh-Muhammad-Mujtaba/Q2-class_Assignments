"use client"
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from 'next/image';

export default function SkillSection() {
  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF]">
      <section >
        {/* Skills Section */}
        <div className="flex flex-col items-center text-center  space-y-12">
          <Image
            src="/images/image.png"
            alt="svg"
            width={128}
            height={128}
            className="object-contain"
          />
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
            Skills
          </button>
          <div>
          <p>
            I have a strong foundation in the following programming languages:
          </p>
          <h4 className="font-bold">
            HTML, CSS, JavaScript, TypeScript, and Python
          </h4>
          <p>
            In addition to coding, I excel in graphic design, where I've created
            everything from:
          </p>
          <h4 className="font-bold">
            Posters, flyers, logos, to full-fledged web design
          </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
