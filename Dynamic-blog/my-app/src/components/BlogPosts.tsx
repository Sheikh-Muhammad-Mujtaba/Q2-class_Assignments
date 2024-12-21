"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  info: string;
  image: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default function BlogPosts() {
  const [data, setData] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog-posts`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
        setError('Failed to load blog posts');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center px-0 py-10">
        <h1 className="text-[24px] font-semibold text-red-500">{error}</h1>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center px-0 py-10">
        <h1 className="text-[24px] font-semibold text-red-500">No blog posts available</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-0 py-[30px] gap-[64px] w-full min-h-[1183px] bg-[#FFFFFF] dark:bg-[#090D1F]">
      <div className="flex flex-col items-start px-[32px] py-0 gap-[30px] sm:w-[88.889vw] min-h-[1123px]">
        <h1 className="w-[84.444vw] h-[32px] font-semibold text-[24px] leading-[32px] text-[#1A1A1A] dark:text-white">
          All blog posts
        </h1>
        <div className="flex flex-row flex-wrap items-center md:items-start p-0 gap-[48px] md:w-[88vw] min-h-[968px]">
          {data.map((blog) => (
            <div key={blog.id} className="flex flex-col items-start p-0 gap-[32px] max-w-[348px] md:max-w-[250px] lg:max-w-[384px] xl:max-w-[26.667vw] min-h-[444px]">
              <Image src={blog.image} alt={blog.title} width={500} height={500} className="w-full h-[240px]" />
              <div className="flex flex-col items-start p-0 gap-[24px] w-full min-h-[172px]">
                <h1 className='w-full min-h-[20px] font-semibold text-[14px] leading-[20px] text-[#6941C6]'>{blog.info}</h1>
                <div className='flex flex-row justify-between items-start p-0 gap-[16px] w-full min-h-[32px]'>
                  <h1 className=' min-h-[32px] font-semibold text-[24px] leading-[32px] text-[#1A1A1A] dark:text-white'>{blog.title}</h1>
                  <Link href={`/posts/${blog.id}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:invert'>
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <p className='w-full min-h-[48px] font-normal text-[16px] leading-[24px] text-[#667085]'>{blog.description.slice(0, 100)}...</p>
              </div>
              <div className='flex flex-row items-start p-0 gap-[8px] w-full h-[24px]'>
                {blog.tags.map((tag, index) => {
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
                    <span key={index} className={`px-2 py-1 text-[12px] font-medium leading-[16px] ${tagColors[tag] || 'bg-[#F8F9FC] text-[#363F72]'} rounded-full`}>
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
  );
}