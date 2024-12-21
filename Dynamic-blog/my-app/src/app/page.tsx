import Banner from "@/components/Blog-pg-Banner";
import BlogPosts from "@/components/BlogPosts";


export default function Home() {
  return (
    <div className="bg-white dark:bg-[#090D1F] w-full">
      <div className="items-center justify-center flex h-[180px] sm:h-full">
        <Banner />
      </div>
      <BlogPosts />
    </div>
  );
}
