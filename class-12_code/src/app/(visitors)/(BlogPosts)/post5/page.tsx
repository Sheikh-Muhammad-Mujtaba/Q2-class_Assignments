import React from 'react'
import Image from 'next/image';
import BlogPosts from '@/components/BlogPosts';

export default async function page() {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    let data;
    try {
        const response = await fetch(`${baseURL}/blog?id=5`);
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
                <Image
                    src={data.image}
                    alt={data.title}
                    width={500}
                    height={500}
                    className="w-full max-h-[426px]"
                />

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Top 10 JavaScript Frameworks to Use</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    JavaScript frameworks make development easier by providing developers with built-in features, tools, and functionalities that speed up the development process. In this post, we’ll explore some of the most popular JavaScript frameworks and why they are worth considering for your next project.
                </p>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Why Use a JavaScript Framework?</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    JavaScript frameworks save time and effort by offering:
                </p>
                <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                    <li><strong>Faster Development:</strong> Frameworks provide templates, reusable components, and built-in functionality to speed up the development process.</li>
                    <li><strong>Efficiency:</strong> With a framework, you don’t have to reinvent the wheel every time you build a new app, as common tasks are already handled for you.</li>
                    <li><strong>Better Maintainability:</strong> Code structure and best practices provided by frameworks make it easier to maintain and scale your application.</li>
                    <li><strong>Community Support:</strong> Popular frameworks have large communities, meaning you can find plenty of resources, plugins, and tutorials to help you get started and solve problems along the way.</li>
                </ul>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Top 10 JavaScript Frameworks</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Here are some of the best JavaScript frameworks that can help you in your software development journey:
                </p>

                <ol className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-decimal ml-6">
                    <li><strong>React:</strong> A powerful front-end library used to build interactive user interfaces, developed by Facebook.</li>
                    <li><strong>Vue.js:</strong> A progressive framework for building UIs and single-page applications, known for its simplicity and flexibility.</li>
                    <li><strong>Angular:</strong> A robust, full-fledged framework by Google for building large-scale web applications.</li>
                    <li><strong>Next.js:</strong> A React-based framework that allows server-side rendering and static website generation for improved performance.</li>
                    <li><strong>Svelte:</strong> A modern framework that compiles components into highly efficient imperative code, ensuring faster loading times.</li>
                    <li><strong>Ember.js:</strong> A framework that offers an opinionated approach to building web apps, with built-in tools and conventions.</li>
                    <li><strong>Express.js:</strong> A lightweight Node.js framework for building web and mobile applications, commonly used for REST APIs.</li>
                    <li><strong>Backbone.js:</strong> A lightweight JavaScript library that provides the minimal structure needed to build web applications.</li>
                    <li><strong>Nuxt.js:</strong> A framework built on top of Vue.js that makes it easier to develop server-side rendered applications.</li>
                    <li><strong>Meteor:</strong> A full-stack JavaScript framework that helps you build real-time applications with ease.</li>
                </ol>

                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Choosing the Right Framework</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    Choosing the right framework for your project depends on several factors:
                   
                </p>
                <ul className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0] list-disc ml-6">
                        <li><strong>Project Requirements:</strong> Does your app require a lot of interactivity or real-time features? A framework like React or Vue.js may be ideal.</li>
                        <li><strong>Scalability:</strong> If you're building a large-scale enterprise application, Angular or Ember.js could be a better choice.</li>
                        <li><strong>Learning Curve:</strong> Some frameworks are easier to learn than others. React and Vue.js are known for their gentle learning curve, while Angular may require more time to get comfortable with.</li>
                    </ul>
                <h2 className="font-bold text-[18px] leading-[24px] dark:text-[#C0C5D0]">Conclusion</h2>
                <p className="font-normal text-[16px] leading-[24px] dark:text-[#C0C5D0]">
                    JavaScript frameworks can make the development process much more efficient and streamlined. By selecting the right framework for your needs, you can create scalable, maintainable, and high-performance applications. Whether you’re building a simple app or a complex enterprise solution, there’s a framework out there that fits your needs perfectly.
                </p>
            </div>
        </div>
    )
}
