import Banner from "@/components/Banner";
import BlogPosts from "@/components/BlogPosts";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-[#090D1F] min-h-screen w-full">  
      <Banner />
      <BlogPosts />
    </div>
  );
}
