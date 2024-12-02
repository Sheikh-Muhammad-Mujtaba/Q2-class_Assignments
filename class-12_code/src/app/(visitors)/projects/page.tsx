import Link from 'next/link';
import React from 'react'
import Image from "next/image";

export default async function page() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  let data;
  try {
    const response = await fetch(`${baseURL}/projects`);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    data = await response.json();
  } catch (error) {
    console.error('Failed to fetch projetcs:', error);
    return (
      <div className="flex flex-col items-center px-0 py-10">
        <h1 className="text-[24px] font-semibold text-red-500">Failed to load Projects</h1>
      </div>
    );
  }


  return (
    <div className='flex flex-col justify-center items-center text-[20px] font-semibold text-center dark:text-white'>
      {/* Banner */}
      <div className="flex flex-col justify-center items-center px-0 py-[30px] gap-[50px] w-[90vw] h-[32.292vw] bg-[#FFFFFF] dark:bg-[#090D1F] border-y-2 border-gray-500">
        <h1 className="flex font-bold text-[16.931vw] text-center leading-7 lg:leading-[295px] text-[#1A1A1A] dark:text-white ">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-col items-center px-0 py-[30px] gap-[64px] w-full min-h-[2080px] ">
        <div className='flex flex-col items-center px-4 sm:px-0 py-0 gap-[32px] w-[88.889vw] min-h-[2020px]'>
          <h1 className='w-full font-semibold text-[24px] text-start leading-[32px] dark:text-[#FFFFFF]'>
            List Project
          </h1>
          {/* projects */}
          <div className="flex flex-col md:flex-row items-start p-0 gap-[32px]">
            {data
              .filter((_: any, index: number) => index <= 1)
              .map((project: any, index: number) => (
                <div key={index} className="flex flex-col items-start p-0 gap-[32px] max-w-[348px] sm:max-w-full md:max-w-[43vw] min-h-[444px]">
                  <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-[330px]" />
                  {/* Text content */}
                  <div className="flex flex-col items-start p-0 gap-[24px] w-full sm:min-h-[172px]">
                    {/* Title */}
                    <div className="flex flex-row justify-between items-start p-0 gap-[16px] w-full min-h-[32px]">
                      <h1 className="min-h-[32px] font-semibold text-start text-[18px] sm:text-[24px] leading-[32px] text-[#1A1A1A] dark:text-white">
                        {project.title}
                      </h1>
                      <Link href={project.link}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:invert">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Link>
                    </div>
                    <p className="w-full min-h-[48px] font-normal text-start text-[13px] sm:text-[16px] leading-[24px] text-[#667085]">
                      {project.description.slice(0,100) + "..."}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-row items-start p-0 gap-[8px] w-full h-[24px]">
                    {project.tags.map((tag: string, tagIndex: number) => {
                      const tagColors: { [key: string]: string } = {
                        Leadership: 'bg-[#F9F5FF] text-[#6941C6]',
                        Design: 'bg-[#F9F5FF] text-[#6941C6]',
                        Podcasts: 'bg-[#F9F5FF] text-[#6941C6]',
                        Research: 'bg-[#EEF4FF] text-[#3538CD]',
                        Branding: 'bg-[#EEF4FF] text-[#3538CD]',
                        Frameworks: 'bg-[#FFF6ED] text-[#C4320A]',
                        Product: 'bg-[#F0F9FF] text-[#026AA2]',
                        Tools: 'bg-[#FDF2FA] text-[#C11574]',
                        SaaS: 'bg-[#FFF1F3] text-[#C01048]',
                        Presentation: 'bg-[#FDF2FA] text-[#C11574]',
                        Identity: 'bg-[#FDF2FA] text-[#C11574]',
                        'Software Development': 'bg-[#ECFDF3] text-[#027A48]',
                      };
                      return (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-[12px] font-medium leading-[16px] ${tagColors[tag] || 'bg-[#F8F9FC] text-[#363F72]'} rounded-full`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
          {/* center */}
          <div className='w-full flex  justify-center '>
          {data
              .filter((_: any, index: number) => index === 2)
              .map((project: any, index: number) => (
                <div key={index} className="flex flex-col items-start p-0 gap-[32px] max-w-[348px] sm:max-w-full sm:min-w-full min-h-[630px] sm:min-h-[760px]">
                  <Image src={project.image} alt={project.title} width={500} height={500} className="w-full max-h-[556px]" />
                  {/* Text content */}
                  <div className="flex flex-col items-start p-0 gap-[24px] w-full min-h-[172px]">
                    {/* Title */}
                    <div className="flex flex-row justify-between items-start p-0 gap-[16px] w-full min-h-[32px]">
                      <h1 className="max-w-[1176px] font-semibold text-[18px] sm:text-[24px] text-start leading-[32px] text-[#1A1A1A] dark:text-white">
                        {project.title}
                      </h1>
                      <Link href={project.link}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:invert">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Link>
                    </div>
                    <p className="w-full min-h-[48px] font-normal text-start text-[13px] sm:text-[16px] leading-[24px] text-[#667085]">
                      {project.description.slice(0,150) + "..."}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-row flex-wrap sm:flex-nowrap items-start p-0 gap-[8px] w-full min-h-[24px]">
                    {project.tags.map((tag: string, tagIndex: number) => {
                      const tagColors: { [key: string]: string } = {
                        Leadership: 'bg-[#F9F5FF] text-[#6941C6]',
                        Design: 'bg-[#F9F5FF] text-[#6941C6]',
                        Podcasts: 'bg-[#F9F5FF] text-[#6941C6]',
                        Research: 'bg-[#EEF4FF] text-[#3538CD]',
                        Branding: 'bg-[#EEF4FF] text-[#3538CD]',
                        Frameworks: 'bg-[#FFF6ED] text-[#C4320A]',
                        Product: 'bg-[#F0F9FF] text-[#026AA2]',
                        Tools: 'bg-[#FDF2FA] text-[#C11574]',
                        SaaS: 'bg-[#FFF1F3] text-[#C01048]',
                        Presentation: 'bg-[#FDF2FA] text-[#C11574]',
                        Identity: 'bg-[#FDF2FA] text-[#C11574]',
                        'Software Development': 'bg-[#ECFDF3] text-[#027A48]',
                      };
                      return (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-[12px] font-medium leading-[16px] ${tagColors[tag] || 'bg-[#F8F9FC] text-[#363F72]'} rounded-full`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
          {/* last */}
          <div className="flex flex-col md:flex-row items-start p-0 gap-[32px]">
            {data
              .filter((_: any, index: number) => index >= 3)
              .map((project: any, index: number) => (
                <div key={index} className="flex flex-col items-start p-0 gap-[32px] max-w-[348px] sm:max-w-full md:max-w-[43vw] min-h-[444px]">
                  <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-[330px]" />
                  {/* Text content */}
                  <div className="flex flex-col items-start p-0 gap-[24px] w-full min-h-[172px]">
                    {/* Title */}
                    <div className="flex flex-row justify-between items-start p-0 gap-[16px] w-full min-h-[32px]">
                      <h1 className="min-h-[32px] font-semibold text-start text-[18px] sm:text-[24px] leading-[32px] text-[#1A1A1A] dark:text-white">
                        {project.title}
                      </h1>
                      <Link href={project.link}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:invert">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Link>
                    </div>
                    <p className="w-full min-h-[48px] font-normal text-start text-[13px] sm:text-[16px] leading-[24px] text-[#667085]">
                      {project.description.slice(0,100) + "..."}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-row items-start p-0 gap-[8px] w-full h-[24px]">
                    {project.tags.map((tag: string, tagIndex: number) => {
                      const tagColors: { [key: string]: string } = {
                        Leadership: 'bg-[#F9F5FF] text-[#6941C6]',
                        Design: 'bg-[#F9F5FF] text-[#6941C6]',
                        Podcasts: 'bg-[#F9F5FF] text-[#6941C6]',
                        Research: 'bg-[#EEF4FF] text-[#3538CD]',
                        Branding: 'bg-[#EEF4FF] text-[#3538CD]',
                        Frameworks: 'bg-[#FFF6ED] text-[#C4320A]',
                        Product: 'bg-[#F0F9FF] text-[#026AA2]',
                        Tools: 'bg-[#FDF2FA] text-[#C11574]',
                        SaaS: 'bg-[#FFF1F3] text-[#C01048]',
                        Presentation: 'bg-[#FDF2FA] text-[#C11574]',
                        Identity: 'bg-[#FDF2FA] text-[#C11574]',
                        'Software Development': 'bg-[#ECFDF3] text-[#027A48]',
                      };
                      return (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-[12px] font-medium leading-[16px] ${tagColors[tag] || 'bg-[#F8F9FC] text-[#363F72]'} rounded-full`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  )
}

