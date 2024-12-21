"use client";

import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

interface PostData {
  id: number;
  info: string;
  image: string;
  title: string;
  description: string;
  content: {
    introduction: string;
    keySections: {
      [key: string]: {
        description: string;
        takeaway: string;
      };
    };
    conclusion: string;
  };
  link: string;
  tags: string[];
}

export default function Post() {
  const router = useRouter();
  const { id } = useParams();
  const [postData, setPostData] = useState<PostData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Missing 'id' in URL.");
      return;
    }

    async function fetchPostData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog-posts?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const data = await response.json();
        setPostData(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to fetch the post.");
      }
    }

    fetchPostData();
  }, [id]);

  if (error) {
    return <div className="text-red-600 text-center mt-8">{error}</div>;
  }

  if (!postData) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <div className="flex flex-col items-center px-4 py-10 gap-10 w-full bg-white dark:bg-gray-900">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {postData.title}
          </h1>
          {postData.image && (
            <div className="relative w-full h-64">
              <Image
                src={postData.image}
                alt={postData.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          )}
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {postData.description}
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {postData.content.introduction}
            </p>
            {Object.entries(postData.content.keySections).map(
              ([key, section], index) => (
                <div key={index} className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mt-2">
                    {section.description}
                  </p>
                  <p className="text-gray-800 dark:text-gray-300 font-semibold mt-2">
                    Takeaway: {section.takeaway}
                  </p>
                </div>
              )
            )}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8">
              Conclusion
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {postData.content.conclusion}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {postData.tags.map((tag, index) => {
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
      </div>
    </>
  );
}
