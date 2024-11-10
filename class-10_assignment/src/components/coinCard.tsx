import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "./useInView"; // Adjust path as necessary

interface CoinCardProps {
  coin: string;
  rate: number;
  target: string;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin, rate, target }) => {
  const { ref, isVisible } = useInView();

  return (
    <Card
      ref={ref}
      className={`transition-opacity transform bg-gradient-to-br from-[#ffb703] to-[#fb8500] rounded-lg border border-gray-200 shadow-lg hover:shadow-[#219ebc] hover:shadow-2xl  hover:scale-105 duration-300 ${
        isVisible ? 'animate-appear opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
    >
      <CardHeader>
        <CardTitle>{coin}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">{rate.toFixed(4)}</p>
        <p className="text-sm text-gray-500">{target}</p>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
