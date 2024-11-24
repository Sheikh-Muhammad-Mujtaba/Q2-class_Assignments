import React from 'react'
import Image from 'next/image';

export default function BlogPosts() {
  return (
    <div className="flex flex-col items-center px-0 py-[30px] gap-[64px] w-full min-h-[1183px] bg-[#FFFFFF] dark:bg-[#090D1F]">
      <div className="flex flex-col items-start px-[32px] py-0 gap-[30px] w-[88.889vw] min-h-[1123px]">
        <h1 className="w-[84.444vw] h-[32px] font-semibold text-[24px] leading-[32px] text-[#1A1A1A] dark:text-white">
          All blog posts
        </h1>

        <div className="flex flex-row flex-wrap items-start p-0 gap-[48px] w-[84.444vw] min-h-[968px]">
          <div className="flex flex-col items-start p-0 gap-[32px] max-w-[384px] h-[444px]">
            <Image src={""} alt='' width={200} height={200}
              className="w-full h-[240px]"
            />
            {/* text content */}
            <div className="flex flex-col items-start p-0 gap-[24px] w-[26.667vw] h-[172px]">
              <h1 className='w-full h-[20px] font-semibold text-[14px] leading-[20px] text-[#6941C6]'>
                Alec Whitten • 1 Jan 2023
              </h1>
              {/* title */}
              <div className='flex flex-row justify-between items-start p-0 gap-[16px] w-full h-[32px]'>
                <h1 className=' h-[32px] font-semibold text-[24px] leading-[32px] text-[#1A1A1A] dark:text-white'>
                  hey hay hay
                </h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:invert'>
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p className='w-full h-[48px] font-normal text-[16px] leading-[24px] text-[#667085]'>
                enfjskdnd ajjdbbjabsjk asjajk
              </p>
            </div>

            <div className='flex flex-row items-start p-0 gap-[8px] w-full h-[24px]'>


            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

