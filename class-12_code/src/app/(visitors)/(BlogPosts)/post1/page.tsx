import React from 'react'
import Image from 'next/image';
import BlogPosts from '@/components/BlogPosts';

export default async function page() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    let data;
    try {
        const response = await fetch(`${baseURL}/blog?id=1`);
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

    // console.log(data);
    

    return (
        <div className="w-full flex flex-col-reverse items-center px-[32px] py-0 gap-[32px]">
            <div className="flex justify-center items-start">
                <BlogPosts/>
            </div>

            <div className="flex flex-col items-start p-0 gap-[32px] max-w-[778px] h-fit">
                <p className="font-semibold text-[14px] leading-[20px] text-[#6941C6]">{data.info}</p>
                <h1 className="font-bold text-[36px] leading-[32px] dark:text-[#FFFFFF]">{data.title}</h1>
                <Image src={data.image} alt={data.title} width={500} height={500}
                className="w-full max-h-[426px]"
              />

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Introduction</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Bill Walsh, the legendary NFL coach, is often regarded as one of the greatest minds in sports leadership. His ability to transform the San Francisco 49ers from a struggling team to a three-time Super Bowl-winning dynasty has left an indelible mark on the world of sports and management. But what exactly made Walsh such an effective leader? In this blog, we&apos;ll dive into the principles and strategies that defined his success and explore how they can be applied in any leadership scenario.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">1. Vision Before Execution</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Bill Walsh didn&apos;t just aim to win games; he aimed to create a culture of excellence. When he took over the 49ers, he implemented what he called "The Standard of Performance." This was a set of expectations that went beyond just playing football—it was about how players practiced, communicated, and carried themselves.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> A strong vision provides the foundation for success. As a leader, articulate a clear vision that aligns your team and sets the tone for achieving long-term goals.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">2. The Importance of Preparation</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Walsh believed that success was born out of preparation. His practices were meticulous, down to the smallest detail. Each player knew their role, and no time was wasted during practice. This level of preparation ensured that the team could execute under pressure.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Preparation breeds confidence. Whether in sports or business, a well-prepared team is more likely to succeed under challenging circumstances.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">3. Building Confidence in the Team</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    One of Walsh&apos;s greatest strengths was his ability to instill confidence in his players. He often focused on the strengths of his team members rather than dwelling on their weaknesses. By emphasizing their potential, he helped them believe in their ability to succeed.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Empower your team by highlighting their strengths and showing trust in their abilities. Confidence is contagious and can uplift the entire group.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">4. Emotional Resilience</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Walsh famously stated, "The score will take care of itself." He emphasized the importance of focusing on controllable factors rather than obsessing over the outcome. This mindset helped the 49ers stay composed, even in the face of adversity.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Focus on the process, not just the results. Emotional resilience allows leaders and teams to navigate challenges effectively without losing sight of their goals.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">5. Adaptability and Innovation</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Bill Walsh revolutionized the game of football with his "West Coast Offense," a strategy that focused on short, precise passes and timing. This innovative approach took opponents by surprise and became a staple of modern football.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Don&apos;t be afraid to innovate. Adaptability and creative thinking can give your team a competitive edge in any field.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Conclusion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Bill Walsh&apos;s leadership lessons go far beyond the football field. His emphasis on preparation, confidence, vision, and innovation has inspired leaders across industries. By applying his principles, you can create a culture of excellence and drive your team toward success—whether you're coaching a sports team, managing a business, or leading a project.
                </p>
            </div>

        </div>
    )
}


