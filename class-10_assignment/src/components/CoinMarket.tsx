"use client";

import { useState } from "react";
import CoinCard from "@/components/coinCard";
import SearchTerm from "@/components/searchTerm";
import CoinData from "@/components/CoinData";

export default function CoinMarket({ initialData }: { initialData: CoinData }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRates = initialData?.rates
    ? Object.entries(initialData.rates).filter(([coin]) =>
        coin.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <SearchTerm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search for a coin..."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRates.map(([coin, rate]) => (
          <CoinCard key={coin} coin={coin} rate={rate} target={initialData.target} />
        ))}
      </div>
      {filteredRates.length === 0 && (
        <p className="text-center mt-4 text-white dark:text-black">
          No coins found matching your search.
        </p>
      )}
    </>
  );
}
