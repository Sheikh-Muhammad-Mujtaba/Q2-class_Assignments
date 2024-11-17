import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] bg-[#023047] dark:bg-[#219ebc] flex flex-col gap-8 items-center justify-center">
     
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-gray-500 dark:shadow-slate-100 hover:scale-105">
        <Link href="/coin-csr" >
        CSR
        </Link>
      </Button>
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-gray-500 dark:shadow-slate-100 hover:scale-105">
         <Link href="/coin-ssr" >
         SSR
        </Link>
      </Button>
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-gray-500 dark:shadow-slate-100 hover:scale-105">
        <Link href="/coin-ssg" >
        SSG
        </Link> 
      </Button>
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-gray-500 dark:shadow-slate-100 hover:scale-105">
         <Link href="/coin-isr" >
         ISR
        </Link>
      </Button>
      
    </div>
      );
}
