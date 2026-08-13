const AssetCard = ({
  icon,
  amount,
  quantity,
  symbol,
  profit,
  isNegative,
}) => {
  return (
    <div className="bg-[#111A39] rounded-[28px] p-6">
      <div className="flex items-center justify-between mb-8">
        <img src={icon} alt={symbol} className="w-10 h-10"/>

        <div
          className={`px-2 py-2 rounded-full ml-4 ${
            isNegative
              ? "bg-[#3A1730]"
              : "bg-[#113948]"
          }`}
        >
          <span
            className={`font-semibold ${
              isNegative
                ? "text-[#FF4D6D]"
                : "text-[#00E58F]"
            }`}
          >
            {profit}
          </span>
        </div>
      </div>

      <h3 className="text-white text-[28px] font-bold mt-4">
        {amount}
      </h3>

      <p className="text-[#8190B5] text-xl mt-2">
        {quantity} {symbol}
      </p>
    </div>
  );
};

export default AssetCard;