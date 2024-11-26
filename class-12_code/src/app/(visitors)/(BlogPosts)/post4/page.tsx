import React from 'react'
import Image from 'next/image';
import BlogPosts from '@/components/BlogPosts';

export default async function page() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    let data;
    try {
        const response = await fetch(`${baseURL}/blog?id=4`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        data = await response.json();
    } catch (error) {
        console.error('Failed to fetch blog data:', error);
        return (
            <div className="flex flex-col items-center px-0 py-10">
                <h1 className="text-[24px] font-semibold text-red-500">Failed to load blog posts</h1>
            </div>
        );
    }


    return (
        <div className="w-full flex flex-col-reverse items-center px-[32px] py-0 gap-[32px]">
            <div className="flex justify-center items-start">
                <BlogPosts/>
            </div>

            <div className="flex flex-col items-start p-0 gap-[32px] max-w-[778px] h-fit">
                <p className="font-semibold text-[14px] leading-[20px] text-[#6941C6]">{data.info}</p>
                <h1 className="font-bold text-[36px] leading-[32px] dark:text-[#FFFFFF]">{data.title}</h1>
                <Image 
                    src={data.image} 
                    alt={data.title} 
                    width={500} 
                    height={500}
                    className="w-full max-h-[426px]"
                />

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">The Power of Collaboration in Design</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Collaboration is often the unsung hero behind great design. While individual creativity plays a critical role, teamwork allows designers to build on each other's strengths and generate better solutions. By incorporating diverse viewpoints, ideas, and expertise, collaboration ultimately leads to stronger designs that resonate with a wider audience.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Why Collaboration Matters in Design</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Design is a problem-solving activity. The more perspectives you have, the more creative and effective the solution can be. When working with a team, different viewpoints challenge assumptions, enhance creativity, and lead to better outcomes. Whether you're designing a product, website, or app, the feedback you receive from other team members—whether designers, developers, or users—can help identify potential pitfalls early in the process, allowing you to address them before they become significant issues.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Collaboration in design enables problem-solving from multiple perspectives, leading to stronger, more innovative outcomes.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Types of Collaborative Design</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    There are different forms of collaboration in design, each playing an important role:
                    </p>
                    <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                        <li><strong>Intra-team collaboration:</strong> Collaboration within the design team itself, where designers share ideas, sketches, and feedback to improve the project.</li>
                        <li><strong>Cross-functional collaboration:</strong> Involves working with other teams, such as developers, product managers, or marketers, to align the design with business goals and technical requirements.</li>
                        <li><strong>Client collaboration:</strong> Working closely with clients to understand their needs, gather feedback, and ensure the design aligns with their expectations and goals.</li>
                    </ul>
                

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Benefits of Working in a Design Team</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Some of the key benefits of collaborating in a design team include:
                    </p>
                    <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                        <li><strong>Diverse ideas:</strong> The more minds working together, the more unique and creative ideas will emerge.</li>
                        <li><strong>Shared skills:</strong> Team members can leverage each other's strengths, whether it’s graphic design, UX research, or prototyping.</li>
                        <li><strong>Faster iteration:</strong> Working together allows teams to iterate quickly, testing out ideas and adjusting as needed.</li>
                    </ul>
                
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> The collaboration process accelerates creative problem-solving, leading to a more polished and effective final product.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Overcoming Collaboration Challenges</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    While collaboration offers numerous advantages, it can also present challenges such as differing opinions, miscommunication, and lack of alignment. To overcome these hurdles:
                    </p>
                    <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                        <li><strong>Clear communication:</strong> Ensure that all team members are on the same page and that feedback is constructive.</li>
                        <li><strong>Establish common goals:</strong> Define clear objectives and expectations at the start of the project to prevent misalignment.</li>
                        <li><strong>Respect diversity:</strong> Embrace the variety of skills and perspectives each team member brings to the table.</li>
                    </ul>
                
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Successful collaboration requires open communication, shared goals, and respect for diverse perspectives.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Conclusion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Collaboration is a powerful tool for enhancing design quality and efficiency. By leveraging diverse skills and perspectives, designers can create more innovative and user-centered solutions. While challenges may arise, the benefits of working together far outweigh the drawbacks. The key to success lies in clear communication, mutual respect, and a shared vision.
                </p>
            </div>
        </div>
    )
}
