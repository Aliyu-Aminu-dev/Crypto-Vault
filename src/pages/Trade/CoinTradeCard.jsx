import { ChevronDown } from "lucide-react";

const CoinTradeCard = ({
  title,
  coin,
  symbol,
  icon,
  amount,
}) => {
  return (
    <div className="bg-[#111A39] rounded-[28px] p-5">
      <p className="text-[#8190B5] text-sm mb-4">
        {title}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={icon} alt={symbol} className="w-10 h-10"/>
          
          <div>
            <h3 className="text-white font-semibold">
              {coin}
            </h3>

            <p className="text-[#8190B5] text-sm">
              {symbol}
            </p>
          </div>

          <ChevronDown
            size={18}
            className="text-[#8190B5]"
          />
        </div>

        <h3 className="text-white text-xl font-bold">
          {amount}
        </h3>
      </div>
    </div>
  );
};

export default CoinTradeCard;