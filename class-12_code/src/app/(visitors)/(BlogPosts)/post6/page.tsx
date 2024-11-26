import React from 'react';
import Image from 'next/image';
import BlogPosts from '@/components/BlogPosts';

export default async function page() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    let data;
    try {
        const response = await fetch(`${baseURL}/blog?id=6`);
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
                <BlogPosts />
            </div>

            <div className="flex flex-col items-start p-0 gap-[32px] max-w-[778px] h-fit">
                <p className="font-semibold text-[14px] leading-[20px] text-[#6941C6]">{data.info}</p>
                <h1 className="font-bold text-[36px] leading-[32px] dark:text-[#FFFFFF]">{data.title}</h1>
                <Image src={data.image} alt={data.title} width={500} height={500} className="w-full max-h-[426px]" />

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Introduction</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    In today’s world, starting a community may seem like a daunting task. But it doesn't have to be. Orlando Diggs discusses how to start a Customer Experience (CX) community from scratch, with practical advice on getting started, overcoming challenges, and making sure the community thrives in the long term.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">1. The Power of Community</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    A community is more than just a group of people; it’s a powerful ecosystem that fosters engagement, support, and innovation. When you build a strong community, you're creating a network that thrives on collective knowledge and shared experiences.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Building a community isn’t just about numbers. It’s about creating meaningful connections that foster growth and development for everyone involved.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">2. Building Trust from the Start</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Trust is the foundation of any successful community. From the very beginning, make sure that you’re transparent about your intentions, values, and the goals you want to achieve. Encourage open communication and actively listen to your community members to foster a sense of trust.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Trust is earned through consistent actions and a commitment to transparency. The more you invest in trust-building, the stronger your community will become.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">3. Finding the Right People</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    One of the biggest challenges in starting a community is attracting the right people. The key is to focus on quality over quantity. Reach out to individuals who share your vision, and who are passionate about contributing to the community in meaningful ways. It’s important to establish a group that will set the tone for the entire community.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Focus on attracting people who align with your values and who are eager to contribute. Building a community with the right people is essential to long-term success.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">4. Consistency and Engagement</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Consistency is key to building momentum in a community. Regular engagement through discussions, events, and updates will help keep the community active and growing. Whether it’s through podcasts, blog posts, or webinars, make sure you’re continuously adding value to your members’ experience.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Consistent engagement creates a sense of belonging and encourages members to stay involved. Make it a priority to nurture your community on a regular basis.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">5. Scaling the Community</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    As your community grows, it’s essential to scale its structure. This means implementing systems and tools to manage the influx of new members, while also ensuring that the core values and mission of the community are maintained. It’s important to have clear guidelines and processes to manage growth effectively.
                </p>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] italic">
                    <strong>Key takeaway:</strong> Scaling a community requires thoughtful planning. Establish systems to manage growth while staying true to the community’s core values.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Conclusion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Creating a customer experience (CX) community doesn’t have to be complicated, but it requires patience, persistence, and a commitment to engaging with your members. By following these steps and focusing on trust, engagement, and the right people, you can build a thriving community that will bring lasting value to both you and your members.
                </p>
            </div>
        </div>
    );
}
