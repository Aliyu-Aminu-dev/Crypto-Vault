import { Search } from "lucide-react";
import { useState } from "react";

import MobileLayout from "../../components/layout/MobileLayout";
import BottomNavigation from "../../components/layout/BottomNavigation";

import CoinRow from "./CoinRow";
import MarketTabs from "./MarketTabs";

import bitcoin from "../../assets/images/bitcoin.png";
import ethereum from "../../assets/images/ethereum.png";
import tether from "../../assets/images/tether.png";
import xrp from "../../assets/images/xrp.png";
import polygon from "../../assets/images/polygon.png";
import solana from "../../assets/images/solana.png";
import polkadot from "../../assets/images/polkadot.png";
import cardano from "../../assets/images/cardano.png";
import avalanche from "../../assets/images/avalanche.png";
import bnb from "../../assets/images/bnb.png";

const MarketsPage = () => {
  const [activeTab, setActiveTab] =
    useState("All");

  return (
    <MobileLayout>
      <div className="px-5 pt-8 pb-32">
        {/* Header */}
        <div>
          <h1 className="text-white text-[34px] font-bold">
            Markets
          </h1>

          <p className="text-[#8190B5] mt-2">
            Monitor crypto prices
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 bg-[#111A39] h-[56px] rounded-2xl px-4 flex items-center gap-3">
          <Search
            size={20}
            className="text-[#8190B5]"
          />

          <input
            placeholder="Search Coin"
            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              placeholder:text-[#8190B5]
            "
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-[#111A39] rounded-2xl p-4">
            <p className="text-[#8190B5] text-xs">
              Market Cap
            </p>

            <h3 className="text-white mt-2 font-bold">
              $2.5T
            </h3>
          </div>

          <div className="bg-[#111A39] rounded-2xl p-4">
            <p className="text-[#8190B5] text-xs">
              BTC Dom.
            </p>

            <h3 className="text-white mt-2 font-bold">
              52%
            </h3>
          </div>

          <div className="bg-[#111A39] rounded-2xl p-4">
            <p className="text-[#8190B5] text-xs">
              Volume
            </p>

            <h3 className="text-white mt-2 font-bold">
              $98B
            </h3>
          </div>
        </div>

        {/* Tabs */}
        <MarketTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="grid grid-cols-[1.5fr_1fr_0.8fr_1fr] gap-2 px-1 mt-8 mb-2">

          <span className="text-[#8190B5] text-xs font-medium">
            Coin
          </span>

          <span className="text-[#8190B5] text-xs font-medium text-right">
            Price
          </span>

          <span className="text-[#8190B5] text-xs font-medium text-right">
            24H
          </span>

          <span className="text-[#8190B5] text-xs font-medium text-center">
            Chart
          </span>
        </div>

        {/* Market List */}
        <div className="mt-8">
          <CoinRow
            icon={bitcoin}
            name="Bitcoin"
            symbol="BTC"
            price="$67,420"
            change="2.34%"
          />

          <CoinRow
            icon={ethereum}
            name="Ethereum"
            symbol="ETH"
            price="$3,245"
            change="0.87%"
            positive={false}
          />

          <CoinRow
            icon={tether}
            name="Tether"
            symbol="USDT"
            price="$1.00"
            change="0.01%"
          />

          <CoinRow
            icon={bnb}
            name="BNB"
            symbol="BNB"
            price="$145.00"
            change="4.12%"
            positive={false}
          />

          <CoinRow
            icon={xrp}
            name="XRP"
            symbol="XRP"
            price="$0.59"
            change="1.15%"
          />

          <CoinRow
            icon={solana}
            name="Solana"
            symbol="SOL"
            price="$145.00"
            change="4.12%"
            positive={false}
          />

          <CoinRow
            icon={cardano}
            name="Cardano"
            symbol="ADA"
            price="$145.00"
            change="4.12%"
          />

          <CoinRow
            icon={polygon}
            name="Polygon"
            symbol="MATIC"
            price="$145.00"
            change="4.12%"
            positive={false}
          />

          <CoinRow
            icon={polkadot}
            name="Polkadot"
            symbol="DOT"
            price="$145.00"
            change="4.12%"
          />

          <CoinRow
            icon={avalanche}
            name="Avalanche"
            symbol="AVAX"
            price="$145.00"
            change="4.12%"
            positive={false}
          />
        </div>
      </div>

      <BottomNavigation />
    </MobileLayout>
  );
};

export default MarketsPage;