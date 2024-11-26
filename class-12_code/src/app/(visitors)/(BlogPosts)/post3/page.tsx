import React from 'react'
import Image from 'next/image';
import BlogPosts from '@/components/BlogPosts';

export default async function page() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    let data;
    try {
        const response = await fetch(`${baseURL}/blog?id=3`);
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

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Introduction to Wireframing</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Wireframing is a key phase in the design process, allowing designers to plan the structure of a website or application before diving into visuals and functionality. It acts as a blueprint, helping to lay out key elements and interactions in a simple, visual format.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Why Wireframing is Essential</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Wireframing provides clarity, enables quick iterations, and ensures that everyone involved in the project, from designers to developers to stakeholders, is aligned on the layout and structure. It helps minimize misunderstandings and allows for easier adjustments before the final design is created.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Wireframing helps streamline the design process by providing a clear visual guide for developers, designers, and clients.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Types of Wireframes</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    There are several types of wireframes, each varying in detail and purpose:
                    </p>
                    <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                        <li><strong>Low-fidelity wireframes:</strong> Basic wireframes that focus on layout and content hierarchy. They typically use simple shapes and grayscale elements.</li>
                        <li><strong>High-fidelity wireframes:</strong> More detailed, interactive wireframes that resemble the final product more closely. These include visual elements like buttons and images.</li>
                        <li><strong>Interactive wireframes:</strong> Wireframes that allow users to interact with certain elements, simulating the user experience of a real app or website.</li>
                    </ul>
                

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Wireframing Tools</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Several tools help designers create wireframes, ranging from basic sketching tools to advanced digital platforms. Some popular wireframing tools include:
                    </p>
                    <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Balsamiq</li>
                    </ul>
                
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Choose the right wireframing tool based on your design needs, team collaboration, and the level of detail required for your project.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Conclusion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Wireframing is an essential skill for designers, as it helps clarify the structure and user experience of a product early in the design process. It facilitates communication, collaboration, and iteration, ensuring that the final product meets both user and business goals.
                </p>
            </div>
        </div>
    )
}
