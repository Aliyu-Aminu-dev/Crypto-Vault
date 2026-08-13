const tabs = [
  "Buy",
  "Sell",
  "Swap",
];

const TradeTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex gap-3 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            flex-1
            h-[50px]
            rounded-full
            font-semibold
            transition-all
            ${
              activeTab === tab
                ? "bg-[#00E58F] text-black"
                : "bg-[#111A39] text-[#8190B5]"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TradeTabs;