"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import CoinCard from "./coinCard";


interface CoinData {
  success: boolean
  terms: string
  privacy: string
  timestamp: number
  target: string
  rates: Record<string, number>
}

export default function CoinMarket() {
  const [data, setData] = useState<CoinData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.coinlayer.com/live?access_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((jsonConverted: CoinData) => {
        console.log("JSON Converted Data : ", jsonConverted)
        setData(jsonConverted)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setError("Failed to fetch cryptocurrency data. Please try again later.")
        setLoading(false)
      })
  }, [])

  const filteredRates = data?.rates
    ? Object.entries(data.rates).filter(([coin]) =>
        coin.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  return (
    <div className="container mx-auto p-4">
  
      <h1 className="text-3xl font-bold mb-6 text-[#ffb703] dark:text-black">Cryptocurrency Market</h1>
      <Input
        type="text"
        placeholder="Search for a coin..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 bg-[#8ecae6]"
      />
      {loading && (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRates.map(([coin, rate]) => (
            <CoinCard key={coin} coin={coin} rate={rate} target={data.target} />
          ))}
        </div>
      )}
      {data && filteredRates.length === 0 && (
        <p className="text-center mt-4">No coins found matching your search.</p>
      )}
    </div>
  )
}