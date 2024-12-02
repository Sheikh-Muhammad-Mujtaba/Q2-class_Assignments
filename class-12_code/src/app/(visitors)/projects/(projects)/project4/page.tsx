import React from 'react';
import Image from 'next/image';

export default async function ProjectDetailsPage() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  let projectData;
  try {
    const response = await fetch(`${baseURL}/projects?id=4`);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    projectData = await response.json();
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return (
      <div className="flex flex-col items-center py-10">
        <h1 className="text-2xl font-semibold text-red-500">Failed to load project details</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg dark:bg-gray-800">
      {/* Project Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        {projectData.title}
      </h1>

      {/* Project Info */}
      <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">
        {projectData.info}
      </p>

      {/* Project Image */}
      <div className="mt-6">
        <Image
          src={projectData.image}
          alt={projectData.title}
          width={768}
          height={400}
          className="rounded-lg w-full"
        />
      </div>

      {/* Project Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
          Description
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {projectData.description}
        </p>
      </div>

      {/* Project Tags */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {projectData.tags.map((tag: string, index: number) => {
            // Tag color classes
            const tagColors: { [key: string]: string } = {
              Design: 'bg-purple-100 text-purple-800',
              Research: 'bg-blue-100 text-blue-800',
              Presentation: 'bg-pink-100 text-pink-800',
            };
            return (
              <span
                key={index}
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  tagColors[tag] || 'bg-gray-100 text-gray-800'
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <a
          href="/projects"
          className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium"
        >
          Back to Projects
        </a>
      </div>
    </div>
  );
}
