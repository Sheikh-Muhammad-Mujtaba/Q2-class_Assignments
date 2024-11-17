
interface CoinData {
    success: boolean
    terms: string
    privacy: string
    timestamp: number
    target: string
    rates: Record<string, number>
  }


export default CoinData

