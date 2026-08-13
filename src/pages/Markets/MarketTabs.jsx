const tabs = [
  "All",
  "Gainers",
  "Losers",
  "Favorites",
];

const MarketTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex gap-3 mt-6 overflow-x-auto scrollbar-hide pb-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-5
            py-2.5
            rounded-full
            whitespace-nowrap
            transition-all
            duration-200
            text-sm
            font-medium
            ${
              activeTab === tab
                ? "bg-[#00E58F] text-black"
                : "bg-[#131A2E] text-[#8190B5]"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default MarketTabs;