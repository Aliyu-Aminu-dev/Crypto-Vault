import MobileLayout from "../../components/layout/MobileLayout";
import BottomNavigation from "../../components/layout/BottomNavigation";

import HomeHeader from "./HomeHeader";
import BalanceCard from "./BalanceCard";
import QuickActions from "./QuickActions";
import AssetCard from "./AssetCard";
import TransactionItem from "./TransactionItem";
import TetherCard from "./TetherCard";

import bitcoin from "../../assets/images/bitcoin.png";
import ethereum from "../../assets/images/ethereum.png";

const HomePage = () => {
  return (
    <MobileLayout>
      <div className="px-5 pt-8 pb-32">
        <HomeHeader />

        <BalanceCard />

        <QuickActions />

        {/* Assets */}
        <div className="mt-12 flex justify-between items-center">
          <h2 className="text-white text-[22px] font-bold">
            My Assets
          </h2>

          <button className="text-[#00E58F] font-semibold">
            See all
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <AssetCard
            icon= {bitcoin}
            amount="$824.00"
            quantity="0.01225"
            symbol="BTC"
            profit="▲ 2.34%"
          />

          <AssetCard
            icon= {ethereum}
            amount="$440.00"
            quantity="0.12740"
            symbol="ETH"
            profit="▼ 0.87%"
            isNegative
          />
        </div>

        <TetherCard />

        {/* Transactions */}
        <div className="mt-10 flex justify-between items-center">
          <h2 className="text-white text-[22px] font-bold">
            Recent Transactions
          </h2>

          <button className="text-[#00E58F] font-semibold">
            View all
          </button>
        </div>

        <div className="mt-5">
          <TransactionItem
            title="Bought Bitcoin"
            subTitle="0.00350 BTC • Jul 17"
            amount="+$235.32"
          />

          <TransactionItem
            title="Sold Ethereum"
            subTitle="0.150 ETH • Jul 15"
            amount="-$78.21"
            positive={false}
          />
        </div>
      </div>

      <BottomNavigation />
    </MobileLayout>
  );
};

export default HomePage;