import { Eye } from "lucide-react";
import { useState } from "react";

const BalanceCard = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="bg-[#111A39] rounded-[30px] p-6 mt-8 overflow-hidden">
      <div className="flex items-center gap-3">
        <span className="text-[#8190B5] text-[16px]">
          Your Overall Balance
        </span>

        <button onClick={() => setShowBalance(!showBalance)}>
          <Eye className="text-[#8190B5]" size={20} />
        </button>
      </div>

      <h1 className="text-white text-[58px] font-bold mt-4 leading-none">
        {showBalance ? "$1,614.00" : "••••••"}
      </h1>

      <div className="flex items-center gap-4 mt-7">
        <div className="bg-[#113948] px-4 py-2 rounded-full">
          <span className="text-[#00E58F] font-bold">
            ▲ 8.05%
          </span>
        </div>

        <span className="text-[#8190B5] text-2xl">
          +$120.24 today
        </span>
      </div>

      {/* Chart */}
      <div className="mt-10 h-[180px] relative">
        <div className="absolute w-full h-full rounded-xl">
          <svg
            viewBox="0 0 300 150"
            className="w-full h-full"
          >
            <path
              d="M0,120 C40,140 60,70 100,90 C130,105 140,150 180,120 C200,100 240,70 300,130"
              stroke="#5976EF"
              strokeWidth="4"
              fill="none"
            />

            <path
              d="M0,110 C50,120 70,40 100,20 C130,10 150,120 200,100 C240,90 260,80 300,120"
              stroke="#00E58F"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;