import CoinMarket from "@/components/coin-marcket";
import DarkModeToggle from "@/components/Darkmode-button";

export default function Home() {
  return (
    <div className="bg-[#023047] dark:bg-[#219ebc]">
      <div className="z-10 absolute top-5 sm:top-3 right-5 flex">
        <DarkModeToggle />
        </div>
      <CoinMarket />
    </div>
      );
}
