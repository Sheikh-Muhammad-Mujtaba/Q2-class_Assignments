"use client"
import React from "react";

export default function ContactSection() {
  return (
    <section className="mb-10 mt-5 ">
      <div className="items-center text-center bg-gradient-to-tr from-yellow via-gray-200 to-offwhite mx-auto px-4 lg:px-8 py-8 ">
        <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-center mb-12 mt-12 text-black lg:text-4xl md:text-4xl text-3xl leading-[138.68%]  hover:bg-gray-200">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-900 to-gray-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Me
          </span>
        </button>
        <form className=" max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-left rounded-lg border-2  border-gray-900 border-r-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col space-y-4 md:space-y-6">
              {/* For full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold  text-black"
                >
                  FullName
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-800 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

{/* For email */}
<div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-800 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>


              
              {/* For phone number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-800 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

                {/* For Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 rounded border-l-2 border-b-2 border-gray-800 bg-transparent w-full focus:bg-slate-200 focus:text-black"
                />
              </div>
              </div>
              <div className="flex flex-col space-y-4 md:space-y-6">
            <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 h-32 sm:h-48  rounded border-l-2 border-b-2 border-gray-800 bg-transparent w-full
                  resize-none focus:bg-slate-200 focus:text-black"
                />
              </div>
              <button type="submit" 
              className="btn w-full p-2 sm:p-3 text-black font-bold rounded border-l-4 border-r-4 border-black bg-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >Send Message</button>
            </div>
        </div>


        </form>
      </div>
    </section>
  );
}
