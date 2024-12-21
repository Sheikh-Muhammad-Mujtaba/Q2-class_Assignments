import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center px-0 py-[30px] gap-[64px] w-full h-[84px] bg-[#FFFFFF] dark:bg-[#090D1F]">
      <div className="flex flex-col sm:flex-row items-center sm:items-start p-0 gap-[14px] w-[84.444vw] h-[24px] font-normal text-[20px] leading-[24px] text-[#1A1A1A] dark:text-white">
        <p>© 2023</p>
        <Link href={"https://twitter.com"}>Twitter</Link>
        <Link href={""}>LinkedIn</Link>
        <Link href={"mailto:example@gmail.com"}>Email</Link>
        <Link href={""}>RSS feed</Link>
        <Link href={""}>Add to Feedly</Link>
      </div>
    </div>
  );
}
