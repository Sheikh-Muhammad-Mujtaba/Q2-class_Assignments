import React from 'react'
import Navbar from "@/components/Navbar";


export default function Banner() {
    return (
        <div className="flex flex-col justify-start items-center px-0 py-[30px] gap-[50px] w-full max-h-[32.292vw] bg-[#FFFFFF] dark:bg-[#090D1F]">
            <Navbar />
            <h1 className="flex font-bold text-[16.931vw] text-center sm:leading-[295px] text-[#1A1A1A] dark:text-white ">
                THE BLOG
            </h1>
        </div>
    )
}

