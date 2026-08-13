const CoinRow = ({
  icon,
  name,
  symbol,
  price,
  change,
  positive = true,
}) => {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_0.8fr_1fr] gap-2 py-4 border-b border-[#151C2E] items-center">
      {/* Coin */}
      <div className="flex items-center gap-3">
        <img src={icon} alt={symbol} className="w-10 h-10"/>

        <div>
          <h3 className="text-white text-sm font-semibold">
            {name}
          </h3>

          <p className="text-[#8190B5] text-xs">
            {symbol}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <span className="text-white text-sm font-semibold">
          {price}
        </span>
      </div>

      {/* 24h */}
      <div className="text-right">
        <span
          className={`text-sm font-semibold ${
            positive
              ? "text-[#00E58F]"
              : "text-[#FF4D6D]"
          }`}
        >
          {change}
        </span>
      </div>

      {/* Chart */}
      <div className="flex justify-center">
        <div
          className={`
            w-16
            h-8
            rounded-lg
            ${
              positive
                ? "bg-[#02251B]"
                : "bg-[#2B0410]"
            }
          `}
        >
          <svg
            viewBox="0 0 60 30"
            className="w-full h-full"
          >
            <path
              d={
                positive
                  ? "M2 22 C15 24 18 12 30 10 C45 8 48 18 58 6"
                  : "M2 8 C15 10 18 20 30 22 C45 24 48 14 58 26"
              }
              stroke={
                positive
                  ? "#00E58F"
                  : "#FF4D6D"
              }
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoinRow;