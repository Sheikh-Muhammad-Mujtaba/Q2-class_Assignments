"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import CoinData from "@/components/CoinData";
import CoinMarket from "@/components/CoinMarket";

export default function CoinCSRPage() {
  const [data, setData] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.coinlayer.com/live?access_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonConverted: CoinData = await res.json();
        console.log("JSON Converted Data:", jsonConverted);
        setData(jsonConverted);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch cryptocurrency data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#ffb703] dark:text-black">
        Cryptocurrency Market (CSR Example)
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        data && <CoinMarket initialData={data} />
      )}
    </div>
  );
}
