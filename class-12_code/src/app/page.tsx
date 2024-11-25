import Banner from "@/components/Banner";
import BlogPosts from "@/components/BlogPosts";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-[#090D1F] w-full">  
    <div className="flex h-[180px] sm:h-full">
     <Banner /> 
    </div>
      
      <BlogPosts />
      
    </div>
  );
}
