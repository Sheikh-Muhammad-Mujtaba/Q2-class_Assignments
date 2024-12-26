'use client';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mannqaaz");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (state.succeeded) {
    return (
      <section className="text-center py-8">
        <p className="text-lg font-semibold text-green-600">Thanks for joining! Your message has been sent successfully.</p>
      </section>
    );
  }

  return (
    <section className="mb-10 mt-5">
      <div className="items-center text-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(26,_21,_21,_0)_0%,_rgba(1,_1,_1,_0.16)_100%),_#FFFFFF] mx-auto px-4 lg:px-8 py-8">
        <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-center mb-12 mt-12 text-black lg:text-4xl md:text-4xl text-3xl leading-[138.68%] hover:bg-gray-200">
          Contact{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-900 to-gray-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            Me
          </span>
        </button>
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-left rounded-lg border-2 border-gray-900 border-r-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-800 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-800 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-800 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 rounded border-l-2 border-b-2 border-gray-800 bg-transparent w-full focus:bg-slate-200 focus:text-black"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-l-2 border-b-2 border-gray-800 bg-transparent w-full resize-none focus:bg-slate-200 focus:text-black"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="btn w-full p-2 sm:p-3 text-black font-bold rounded border-l-4 border-r-4 border-black bg-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
