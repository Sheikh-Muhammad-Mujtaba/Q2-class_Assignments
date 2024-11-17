
import CoinMarket from "@/components/CoinMarket"; 
import CoinData from "@/components/CoinData";


export default async function CoinISRPage() {
  const res = await fetch(
    `http://api.coinlayer.com/live?access_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
        next: {revalidate: 60},
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: CoinData = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#ffb703] dark:text-black">
        Cryptocurrency Market (ISR Example)
      </h1>
      <CoinMarket initialData={data} />
    </div>
  );
}
