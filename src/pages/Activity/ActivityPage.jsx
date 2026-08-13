import { useState } from "react";
import MobileLayout from "../../components/layout/MobileLayout";
import BottomNavigation from "../../components/layout/BottomNavigation";

import ActivityTabs from "./ActivityTabs";
import ActivityCard from "./ActivityCard";

import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";

const transactions = [
  {
    id: 1,
    type: "Buy",
    coin: "Bitcoin",
    symbol: "BTC",
    amount: "+0.00425 BTC",
    value: "$286.54",
    date: "Today • 09:45 AM",
    status: "Completed",
    icon: up,
  },

  {
    id: 2,
    type: "Sell",
    coin: "Ethereum",
    symbol: "ETH",
    amount: "-0.65 ETH",
    value: "$2,109.25",
    date: "Today • 07:13 AM",
    status: "Completed",
    icon: down,
  },

  {
    id: 3,
    type: "Swap",
    coin: "Tether",
    symbol: "USDT",
    amount: "+500 USDT",
    value: "$500",
    date: "Yesterday",
    status: "Completed",
    icon: up,
  },

  {
    id: 4,
    type: "Deposit",
    coin: "USDT Deposit",
    symbol: "USDT",
    amount: "+1000 USDT",
    value: "$1000",
    date: "Yesterday",
    status: "Pending",
    icon: down,
  },
];

const ActivityPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTransactions =
    activeTab === "All"
      ? transactions
      : transactions.filter(
          (item) => item.type === activeTab
        );

  return (
    <MobileLayout>
      <div className="px-5 pt-8 pb-32">
        {/* Header */}
        <div>
          <h1 className="text-white text-[34px] font-bold">
            Activity
          </h1>

          <p className="text-[#8190B5] mt-2">
            Transaction history
          </p>
        </div>

        <ActivityTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="space-y-4 mt-8">
          {filteredTransactions.map((transaction) => (
            <ActivityCard
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </MobileLayout>
  );
};

export default ActivityPage;