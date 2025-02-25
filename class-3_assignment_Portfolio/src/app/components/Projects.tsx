"use client";

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import Button from "./UI/playbutton";
import CodeButton from "./UI/codeButton";

// PortfolioCard Component to handle each portfolio item
const PortfolioCard = ({ title, imageSrc, codeLink, liveLink }:any) => {
  return (
    <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition duration-300"
    data-aos="flip-down">
      <Link href={codeLink} target="_blank" rel="noopener noreferrer">
        <CodeButton />
      </Link>
      <Image
        src={imageSrc}
        alt={title}
        width={800}
        height={800}
        className="w-full h-[70%] rounded-lg object-scale-down"
      />
      <div className="flex flex-row justify-between m-4">
        <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left font-bold text-[#000000] tracking-[0.13538em]">
          {title}
        </h1>
        <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default function PortfolioSection() {
  const portfolioData = [
    {
      type: "full-stack",
      title: "SHOP.CO E-Commerce",
      imageSrc: "/images/e-commerce.png",
      codeLink: "#contact",
      liveLink: "https://dynamicblogs-brown.vercel.app/",
    },
    {
      type: "full-stack",
      title: "Blog Site Theme",
      imageSrc: "/images/blog-app.png",
      codeLink: "#contact",
      liveLink: "https://dynamicblogs-brown.vercel.app/",
    },
    {
      type: "full-stack",
      title: "Car Gage",
      imageSrc: "/images/cargage.png",
      codeLink: "#contact",
      liveLink: "https://cargage-momin-khans-projects-c9bd88f2.vercel.app/",
    },
    {
      type: "full-stack",
      title: "Resume Builder",
      imageSrc: "/images/resume-builder.png",
      codeLink: "#contact",
      liveLink: "https://resume-builder-beta-two.vercel.app/",
    },
    {
      type: "full-stack",
      title: "Cafe Street",
      imageSrc: "/images/coffee-store.png",
      codeLink: "#contact",
      liveLink: "https://coffee-shop-ochre-five.vercel.app/",
    },
    {
      type: "front-end",
      title: "Visin N Learn",
      imageSrc: "/images/visit-n-learn.png",
      codeLink: "#contact",
      liveLink: "https://studynlearn.vercel.app/",
    },
    {
      type: "front-end",
      title: "SoundDZign Clone",
      imageSrc: "/images/soundDZign-clone.png",
      codeLink: "#contact",
      liveLink: "https://q2-class-assignments-xmno.vercel.app/",
    },
    {
      type: "front-end",
      title: "Furniro E-Commerce UI",
      imageSrc: "/images/furniro-page.png",
      codeLink: "#contact",
      liveLink: "https://htms-css-ui-design.vercel.app/",
    },
    {
      type: "widgets-apps",
      title: "Password Generator",
      imageSrc: "/images/password-gen.png",
      codeLink: "https://github.com/Sheikh-Muhammad-Mujtaba/nextjs-password_genrator-app",
      liveLink: "https://nextjs-password-genrator-app.vercel.app/",
    },
    {
      type: "widgets-apps",
      title: "Pomodoro Timer",
      imageSrc: "/images/promodro-timer.png",
      codeLink: "https://github.com/Sheikh-Muhammad-Mujtaba/pomodoro_timer-app",
      liveLink: "https://pomodoro-timer-app-alpha.vercel.app/",
    },
    {
      type: "widgets-apps",
      title: "Countdown Timer",
      imageSrc: "/images/countdown-timer.png",
      codeLink: "https://github.com/Sheikh-Muhammad-Mujtaba/countdown_timer_nextjs",
      liveLink: "https://countdown-timer-nextjs-sable.vercel.app/",
    },
    {
      type: "cli-apps",
      title: "Quiz App",
      imageSrc: "/images/cli-quiz.png",
      codeLink: "https://github.com/Sheikh-Muhammad-Mujtaba/My_projects/tree/main/Next_Gen_Quiz-app",
      liveLink: "https://www.npmjs.com/package/next_gen_quiz-app",
    },
    {
      type: "cli-apps",
      title: "Number Guessing Game",
      imageSrc: "/images/Cli-game.png",
      codeLink: "https://github.com/Sheikh-Muhammad-Mujtaba/My_projects/tree/main/cli_number_guessing_game",
      liveLink: "https://www.npmjs.com/package/cli-random-number-guessing-game",
    },
    {
      type: "cli-apps",
      title: "ATM App",
      imageSrc: "/images/ATM-app.png",
      codeLink: "https://github.com/Sheikh-Muhammad-Mujtaba/My_projects/tree/main/Atm_Machine_App",
      liveLink: "https://www.npmjs.com/package/atm_machine_app",
    }
  ];

  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF]">
      <section>
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center h-[321px]">
            <Image
              src={"/images/portfolio-bt-bg.png"}
              alt="bg"
              width={1000}
              height={800}
              className="absolute left-0 w-full h-[321px] z-[-1]"
            />
            <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
              PORTFOLIO
            </button>
          </div>

          <div className="w-full h-fit justify-center bg-[#1A1A1A]">
          <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">Full-Stack Projects</h1>
            <div className="flex flex-wrap justify-center gap-[20px] m-5">
              {portfolioData.map((project, index) => 
                project.type === "full-stack" && <PortfolioCard key={index} {...project} />
              )}
            </div>
            <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">Front-end Projects</h1>
            <div className="flex flex-wrap justify-center gap-[20px] m-5">
              {portfolioData.map((project, index) => 
                project.type === "front-end" && <PortfolioCard key={index} {...project} />
              )}
            </div>

            <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">Widgets Apps</h1>
            <div className="flex flex-wrap justify-center gap-[20px] m-5">
              {portfolioData.map((project, index) => 
                project.type === "widgets-apps" && <PortfolioCard key={index} {...project} />
              )}
            </div>

            <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">CLI Apps</h1>
            <div className="flex flex-wrap justify-center gap-[20px] m-5">
              {portfolioData.map((project, index) => 
                project.type === "cli-apps" && <PortfolioCard key={index} {...project} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
