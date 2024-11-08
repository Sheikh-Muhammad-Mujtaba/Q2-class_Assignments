"use client"
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import Button from "./UI/playbutton";
import CodeButton from "./UI/codeButton";

export default function PortfolioSection() {
  return (
    <div className="w-full max-w-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF]">
      <section >
        {/* PORTFOLIO Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center h-[321px]">
            <Image src={"/images/portfolio-bt-bg.png"} alt="bg" width={1000} height={800} className="absolute left-0 w-full h-[321px] z-[-1]" />
            <button className="justify-center items-center w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
              PORTFOLIO
            </button>
          </div>

          <div className="w-full h-fit justify-center bg-[#1A1A1A]">
            <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">Web UI Designs</h1>

            <div className="flex flex-wrap justify-center gap-[20px] m-5">

              {/* SoundDZign Clone */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/Q2-class_Assignments/tree/main/class-2.1_assignment/my-app"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/soundDZign-clone.png"} alt="soundDZine Image" width={800} height={800} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left font-bold flex tracking-[0.13538em] text-[#000000]">SoundDZign<br />Clone</h1>
                  <Link href={"https://q2-class-assignments-xmno.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>


              {/* Resume Builder */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/Hackthon_Milestone-Based-Interactive_Resume_Builder"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/resume-builder.png"} alt="Resume Builder Image" width={900} height={900} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left items-center font-bold flex tracking-[0.13538em] text-[#000000]">Resume Builder</h1>
                  <Link href={"https://resume-builder-beta-two.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>


              {/* furniro ui DESIGN */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/HTMS-CSS-UI-Design"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/furniro-page.png"} alt="Furniro UI DESIGN Image" width={900} height={900} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left items-center font-bold flex tracking-[0.13538em] text-[#000000]">Furniro <br />E-Commers UI</h1>
                  <Link href={"https://htms-css-ui-design.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>

            </div>

            <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">Widgets Apps</h1>

            <div className="flex flex-wrap justify-center gap-[20px] m-5">

              {/* password-gen App */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/nextjs-password_genrator-app"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/password-gen.png"} alt="Password Genrator Image" width={500} height={1100} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left font-bold flex tracking-[0.13538em] text-[#000000]">Password <br /> Genrator</h1>
                  <Link href={"https://nextjs-password-genrator-app.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>


              {/* Promodro Timer */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/pomodoro_timer-app"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/promodro-timer.png"} alt="Promodro Timer Image" width={500} height={500} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left items-center font-bold flex tracking-[0.13538em] text-[#000000]">Promodro Timer</h1>
                  <Link href={"https://pomodoro-timer-app-alpha.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>


              {/* Countdown Timer */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/countdown_timer_nextjs"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/countdown-timer.png"} alt="Countdown Timer Image" width={900} height={900} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left items-center font-bold flex tracking-[0.13538em] text-[#000000]">Countdown Timer</h1>
                  <Link href={"https://countdown-timer-nextjs-sable.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>

            </div>

            <h1 className="text-[24px] text-white font-bold my-4 shadow-sm shadow-slate-400">CLI Apps</h1>

            <div className="flex flex-wrap justify-center gap-[20px] m-5">

              {/* Quiz App */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/My_projects/tree/main/Next_Gen_Quiz-app"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/cli-quiz.png"} alt="CLI Quiz App Image" width={500} height={1100} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left font-bold flex tracking-[0.13538em] text-[#000000]">Quiz App</h1>
                  <Link href={"https://www.npmjs.com/package/next_gen_quiz-app"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>


              {/* Game App */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/My_projects/tree/main/cli_number_guessing_game"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/Cli-game.png"} alt="Cli Game Image" width={500} height={500} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] sm:leading-[29px] text-left items-center font-bold flex tracking-[0.13538em] text-[#000000]">Number<br />Guessing Game</h1>
                  <Link href={"https://www.npmjs.com/package/cli-random-number-guessing-game"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>


              {/* ATM App */}
              <div className="relative w-[280px] sm:w-[400px] h-[300px] bg-white rounded-lg p-1 hover:shadow-md hover:shadow-slate-500 hover:scale-105 transition  duration-300">
                <Link href={"https://github.com/Sheikh-Muhammad-Mujtaba/My_projects/tree/main/Atm_Machine_App"} target="_blank" rel="noopener noreferrer" ><CodeButton /></Link>
                <Image src={"/images/ATM-app.png"} alt="ATM App Image" width={900} height={900} className="w-full h-[70%] rounded-lg object-scale-down" />
                <div className="flex flex-row justify-between m-4">
                  <h1 className="text-[18px] sm:text-[24px] leading-[29px] text-left items-center font-bold flex tracking-[0.13538em] text-[#000000]">ATM App</h1>
                  <Link href={"https://www.npmjs.com/package/atm_machine_app"} target="_blank" rel="noopener noreferrer" className="flex h-[2em] mt-[10px]"><Button /></Link>
                </div>
              </div>

            </div>


          </div>


        </div>
      </section>
    </div>
  );
}
