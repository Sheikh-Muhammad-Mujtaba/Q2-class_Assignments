"use client";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Nav_bar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "animate.css";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="flex justify-center items-center flex-col bg-yellow ">
        <div
          className="image-bg flex justify-center items-center w-full min-h-[300px] sm:min-h-[600px] flex-wrap "
          
        >
          <div className=" text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-center p-2">
            <h1 className="bounce-in-fwd  border-t-2 border-b-2 border-blue justify-center">
              THE BLOG
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-16 mb-16">
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/images/Cloud-computing.webp"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
              The Future of Cloud Computing: Trends to Watch in 2024
            </h2>
            <p className="text-gray-700 mt-1">
              Explore the emerging trends in cloud computing, including
              serverless architecture, multi-cloud strategies, and advancements
              in cloud security...
            </p>
            <Link href={"/posts/future-of-cloud-computing"}>
            <Button  className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/images/Cybersecurity.webp"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
              Understanding Cybersecurity: Protecting Your Digital Life
            </h2>
            <p className="text-gray-700 mt-1">
              A comprehensive guide on the importance of cybersecurity,
              including tips on protecting personal information and best
              practices for safe online behavior...
            </p>
            <Link href={"/posts/understanding-cybersecurity"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md  hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/images/Artificial-Intelligence.webp"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
              Artificial Intelligence in Everyday Life: Benefits and Challenges
            </h2>
            <p className="text-gray-700 mt-1">
              Discuss how AI is integrated into daily life, its benefits,
              potential challenges, and ethical considerations...{" "}
            </p>
            <Link href={"/posts/artificial-intelligence-in-everyday-life"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/images/Remote-Work.webp"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
              The Rise of Remote Work: Tools and Technologies That Enable
              Success
            </h2>
            <p className="text-gray-700 mt-1">
              An overview of the tools and technologies that have made remote
              work effective, including collaboration software, project
              management tools, and communication platforms...
            </p>
            <Link href={"/posts/rise-of-remote-work"}>       
                 <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>

          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/images/Business-Transformation.webp"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
              The Role of IT in Business Transformation
            </h2>
            <p className="text-gray-700 mt-1">
              How IT is pivotal in transforming businesses, improving
              efficiency, and driving innovation in various industries...
            </p>
            <Link href={"/posts/role-of-it-in-business-transformation"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
          <div className="animate__slideInUp animate__delay-3 animate__slower  min-w-auto bg-white p-4 m-4 rounded shadow-md hover:bg-offwhite  hover:shadow-xl border-[2px] hover:border-blue transition-shadow duration-300">
            <Image
              src="/images/Programming.webp"
              alt="Blog Post"
              width={500}
              height={300}
              className="h-48 object-cover rounded-t"
            />
            <h2 className="text-xl font-bold mt-2">
              5 Essential Programming Languages to Learn in 2024
            </h2>
            <p className="text-gray-700 mt-1">
              A guide to the top programming languages to focus on in 2024,
              including their applications and career prospects...
            </p>
            <Link href={"/posts/5-essential-programming-languages"}>
            <Button className="bg-transparent mt-3 text-[20px] text-zinc-900 border-[2px] border-zinc-900 hover:bg-yellow hover:border-blue hover:text-blue">
              Read More
            </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
