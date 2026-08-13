const tabs = [
  "All",
  "Buy",
  "Sell",
  "Swap",
  "Deposit",
];

const ActivityTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex gap-3 mt-8 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-4
            py-2.5
            rounded-full
            whitespace-nowrap
            transition-all
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

export default ActivityTabs;