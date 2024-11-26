import React from 'react'
import Image from 'next/image';
import BlogPosts from '@/components/BlogPosts';

export default async function page() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    let data;
    try {
        const response = await fetch(`${baseURL}/blog?id=2`);
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

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Introduction</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Mental models are frameworks that simplify complex processes or relationships. They help us make better decisions by providing clarity and structure in our thinking. In this blog, we&apos;ll explore some of the most effective mental models that product managers (PMs) can use to guide their work and improve their strategic thinking.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">1. First Principles Thinking</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Product managers often encounter challenges that seem overwhelming or unsolvable. First principles thinking involves breaking down problems into their fundamental components and then reassembling them from the ground up. This approach encourages innovative solutions and helps teams avoid conventional assumptions.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Always question assumptions and get to the root of the problem. Simplify complex issues to their basic elements to find effective solutions.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">2. Inversion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Inversion involves thinking about a problem in reverse. Instead of asking how to achieve success, ask how to avoid failure. By identifying potential pitfalls, PMs can proactively mitigate risks and improve outcomes.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Sometimes the best way to achieve success is to focus on avoiding mistakes. Use inversion to think critically and plan effectively.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">3. Pareto Principle</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    The Pareto Principle, or the 80/20 rule, suggests that 80% of results come from 20% of efforts. For product managers, this means prioritizing the most impactful tasks and features to maximize value for users.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Focus on high-impact initiatives that deliver the most value to your product and users.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Conclusion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Mental models provide product managers with powerful tools to navigate complexity, make informed decisions, and drive success. By applying first principles thinking, inversion, and the Pareto Principle, PMs can enhance their strategic approach and create products that truly resonate with users.
                </p>
            </div>
        </div>
    )
}
