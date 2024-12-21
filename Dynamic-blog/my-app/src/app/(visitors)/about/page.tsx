import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center text-[20px] gap-[35px] font-semibold text-center dark:text-white'>
      <div className="flex flex-col justify-center items-center px-0 py-[30px] gap-[50px] w-[90vw] h-[28vw] bg-[#FFFFFF] dark:bg-[#090D1F] border-y-2 border-gray-500">

        <h1 className="flex font-bold text-[16.931vw] text-center leading-7 lg:leading-[295px] text-[#1A1A1A] dark:text-white ">
          John Doe
        </h1>
      </div>
      <div className='box-border flex flex-col items-start p-0 gap-[32px] w-[84.444vw] min-h-[1268px] border-[1px_0px] border-solid border-[#FFFFFF]'>
        <Image src={"/image.png"} alt="John Doe" width={500} height={500}
          className='flex items-start w-full max-h-[556px]' />
        {/* about */}
        <div className='flex flex-col items-start p-0 gap-[12px] w-full min-h-[140px] text-start'>
          <h1 className='font-semibold text-[24px] leading-[32px] dark:text-white'>
            About Me
          </h1>
          <p className='font-normal text-[16px] leading-[24px] text-[#545558] dark:text-[#C0C5D0]'>
            As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences that meet the needs of my clients and their users. I have a strong understanding of design principles and a proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition. I am confident in my ability to create designs that are both visually appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.
          </p>
        </div>
        {/* Skills */}
        <div className='flex flex-col items-start p-0 gap-[12px] w-full min-h-[140px] text-start'>
          <h1 className='font-semibold text-[24px] leading-[32px] dark:text-white'>
            Skills:
          </h1>
          <ul className='px-5 font-normal text-[16px] leading-[24px] list-disc text-[#545558] dark:text-[#C0C5D0]'>
            <li>
              Extensive experience in UI design, with a strong portfolio of completed projects
            </li>
            <li>
              Proficiency in design tools such as Adobe Creative Suite and Sketch
            </li>
            <li>
              Excellent visual design skills, with a strong understanding of layout, color theory, and typography
            </li>
            <li>
              Ability to create wireframes and prototypes to communicate design concepts
            </li>
            <li>
              Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams
            </li>
            <li>
              Experience conducting user research and gathering insights to inform design decisions
            </li>
            <li>
              Proficiency in HTML, CSS, and JavaScript
            </li>
          </ul>
        </div>
        {/* experience */}
        <div className='flex flex-col items-start p-0 gap-[12px] w-full min-h-[140px] text-start'>
          <h1 className='font-semibold text-[24px] leading-[32px] dark:text-white'>
            Experience:
          </h1>
          <ul className='px-5 font-normal text-[16px] leading-[24px] list-disc text-[#545558] dark:text-[#C0C5D0]'>
            <li>
              5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries
            </li>
            <li>
              Led the design of a successful e-commerce website, resulting in a 25% increase in online sales
            </li>
            <li>
              Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage
            </li>
            <li>
              Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic
            </li>

          </ul>
        </div>
        {/* education */}
        <div className='flex flex-col items-start p-0 gap-[12px] w-full min-h-[140px] text-start'>
          <h1 className='font-semibold text-[24px] leading-[32px] dark:text-white'>
          Education:
          </h1>
          <ul className='px-5 font-normal text-[16px] leading-[24px] list-disc text-[#545558] dark:text-[#C0C5D0]'>
            <li>
              Bachelor's degree in Graphic Design
            </li>
            <li>
              Certified User Experience Designer (CUED)
            </li>


          </ul>
        </div>
      </div>
    </div>
  )
}

