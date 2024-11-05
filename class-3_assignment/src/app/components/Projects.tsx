"use client"
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF]">
      <section >
        {/* PORTFOLIO Section */}
        <div className="flex flex-col items-center text-center">
            <div  className="flex justify-center items-center h-[321px]">
       <Image src={"/images/portfolio-bt-bg.png"} alt="bg" width={1000} height={800} className="absolute left-0 w-full h-[321px] z-[-1]"/>
       <button className="justify-center items-center w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
          PORTFOLIO
          </button>
          </div>
            
         <div className="w-full h-[1305px]  bg-[#1A1A1A]">

         </div>
        

        </div>
      </section>
    </div>
  );
}
