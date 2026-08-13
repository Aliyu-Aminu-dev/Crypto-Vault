import { useMemo, useState } from "react";
import {
  ArrowDownUp,
  ChevronDown,
  CheckCircle2,
  Search,
  Settings2,
  X,
} from "lucide-react";

import MobileLayout from "../../components/layout/MobileLayout";
import BottomNavigation from "../../components/layout/BottomNavigation";

import bitcoin from "../../assets/images/bitcoin.png";
import ethereum from "../../assets/images/ethereum.png";
import tether from "../../assets/images/tether.png";

const coins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$67,420.00",
    rawPrice: 67420,
    balance: "0.01225 BTC",
    icon: bitcoin,
    change: "+2.34%",
    positive: true,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,245.00",
    rawPrice: 3245,
    balance: "0.12740 ETH",
    icon: ethereum,
    change: "-0.87%",
    positive: false,
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    rawPrice: 1,
    balance: "350.00 USDT",
    icon: tether,
    change: "+0.01%",
    positive: true,
  },
];

const tabs = ["Swap", "Buy", "Sell"];
const quickAmounts = ["25%", "50%", "75%", "Max"];

const TradePage = () => {
  const [activeTab, setActiveTab] = useState("Swap");
  const [fromCoin, setFromCoin] = useState(coins[0]);
  const [toCoin, setToCoin] = useState(coins[2]);
  const [swapAmount, setSwapAmount] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [buySellAmount, setBuySellAmount] = useState("");
  const [selectorSide, setSelectorSide] = useState(null);
  const [showSlippageModal, setShowSlippageModal] = useState(false);
  const [slippage, setSlippage] = useState("0.5");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const estimatedReceive = useMemo(() => {
    const input = Number(swapAmount || 0);
    if (!input) return "0.00";
    const fromValue = input * fromCoin.rawPrice;
    const receiveAmount = fromValue / toCoin.rawPrice;
    if (toCoin.symbol === "USDT") {
      return receiveAmount.toFixed(2);
    }
    return receiveAmount.toFixed(6);
  }, [swapAmount, fromCoin, toCoin]);

  const fiatEstimate = useMemo(() => {
    const input = Number(buySellAmount || 0);
    if (!input) return "0.00";
    if (activeTab === "Buy") {
      return (input / selectedCoin.rawPrice).toFixed(
        selectedCoin.symbol === "USDT" ? 2 : 6
      );
    }
    return (input * selectedCoin.rawPrice).toFixed(2);
  }, [buySellAmount, activeTab, selectedCoin]);

  const isActionDisabled =
    activeTab === "Swap" ? !swapAmount : !buySellAmount;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSwapAmount("");
    setBuySellAmount("");
    setShowConfirmModal(false);
  };

  const handleQuickAmount = (value) => {
    if (activeTab === "Swap") {
      if (value === "25%") setSwapAmount("0.00306");
      if (value === "50%") setSwapAmount("0.00612");
      if (value === "75%") setSwapAmount("0.00918");
      if (value === "Max") setSwapAmount("0.01225");
      return;
    }

    if (activeTab === "Buy") {
      if (value === "25%") setBuySellAmount("100");
      if (value === "50%") setBuySellAmount("250");
      if (value === "75%") setBuySellAmount("500");
      if (value === "Max") setBuySellAmount("1000");
      return;
    }

    if (activeTab === "Sell") {
      if (value === "25%") setBuySellAmount("0.003");
      if (value === "50%") setBuySellAmount("0.006");
      if (value === "75%") setBuySellAmount("0.009");
      if (value === "Max") setBuySellAmount("0.01225");
    }
  };

  const handleCoinSelect = (coin) => {
    if (selectorSide === "from") {
      setFromCoin(coin);
      if (coin.symbol === toCoin.symbol) {
        const replacement = coins.find((item) => item.symbol !== coin.symbol);
        setToCoin(replacement);
      }
    }

    if (selectorSide === "to") {
      setToCoin(coin);
      if (coin.symbol === fromCoin.symbol) {
        const replacement = coins.find((item) => item.symbol !== coin.symbol);
        setFromCoin(replacement);
      }
    }

    setSelectorSide(null);
  };

  const handleSwapCoins = () => {
    const previousFrom = fromCoin;
    setFromCoin(toCoin);
    setToCoin(previousFrom);
  };

  const handlePreviewTrade = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmTrade = () => {
    setShowConfirmModal(false);
    setShowSuccess(true);
  };

  const handleSuccessDone = () => {
    setShowSuccess(false);
    setSwapAmount("");
    setBuySellAmount("");
  };

  return (
    <MobileLayout>
      <div className="px-5 pt-8 pb-32">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-white text-[34px] font-bold">Trade</h1>
            <p className="text-[#8190B5] mt-2">Buy, sell and swap crypto</p>
          </div>

          <button
            type="button"
            onClick={() => setShowSlippageModal(true)}
            className="w-12 h-12 rounded-full bg-[#131A2E] flex items-center justify-center"
          >
            <Settings2 size={22} className="text-[#8190B5]" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-7">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabChange(tab)}
              className={`h-[50px] rounded-full font-semibold transition-all ${activeTab === tab
                ? "bg-[#00E58F] text-black"
                : "bg-[#131A2E] text-[#8190B5]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Swap" && (
          <>
            <div className="mt-8">
              <SwapAssetCard
                label="You Pay"
                coin={fromCoin}
                amount={swapAmount}
                onAmountChange={setSwapAmount}
                onSelect={() => setSelectorSide("from")}
              />
            </div>

            <div className="flex justify-center -my-3 relative z-20">
              <button
                type="button"
                onClick={handleSwapCoins}
                className="w-14 h-14 rounded-full bg-[#00E58F] flex items-center justify-center shadow-[0_0_25px_rgba(0,229,143,0.35)]"
              >
                <ArrowDownUp size={24} className="text-black" />
              </button>
            </div>

            <SwapAssetCard
              label="You Receive"
              coin={toCoin}
              amount={estimatedReceive}
              onSelect={() => setSelectorSide("to")}
              isReceive
            />

            <QuickAmountButtons onSelect={handleQuickAmount} />

            <TradeDetailsCard
              rate={`1 ${fromCoin.symbol} = ${(
                fromCoin.rawPrice / toCoin.rawPrice
              ).toLocaleString()} ${toCoin.symbol}`}
              fee="$1.24"
              priceImpact="0.12%"
              slippage={slippage}
              impactType="low"
            />

            <PrimaryActionButton
              label="Preview Swap"
              disabled={isActionDisabled}
              onClick={handlePreviewTrade}
            />
          </>
        )}

        {activeTab === "Buy" && (
          <>
            <BuySellAmountCard
              activeTab={activeTab}
              selectedCoin={selectedCoin}
              amount={buySellAmount}
              estimate={fiatEstimate}
              onAmountChange={setBuySellAmount}
            />

            <BuySellCoinList
              title="Select Coin to Buy"
              description="Choose which crypto you want to buy"
              coins={coins}
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
            />

            <QuickAmountButtons onSelect={handleQuickAmount} />

            <TradeDetailsCard
              rate={`${selectedCoin.symbol} price ${selectedCoin.price}`}
              fee="$2.10"
              priceImpact="0.18%"
              slippage={slippage}
              impactType="medium"
            />

            <PrimaryActionButton
              label="Preview Buy"
              disabled={isActionDisabled}
              onClick={handlePreviewTrade}
            />
          </>
        )}

        {activeTab === "Sell" && (
          <>
            <BuySellAmountCard
              activeTab={activeTab}
              selectedCoin={selectedCoin}
              amount={buySellAmount}
              estimate={fiatEstimate}
              onAmountChange={setBuySellAmount}
            />

            <BuySellCoinList
              title="Select Coin to Sell"
              description="Choose which crypto you want to sell"
              coins={coins}
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
            />

            <QuickAmountButtons onSelect={handleQuickAmount} />

            <TradeDetailsCard
              rate={`${selectedCoin.symbol} price ${selectedCoin.price}`}
              fee="$1.45"
              priceImpact="0.09%"
              slippage={slippage}
              impactType="low"
            />

            <PrimaryActionButton
              label="Preview Sell"
              disabled={isActionDisabled}
              onClick={handlePreviewTrade}
            />
          </>
        )}
      </div>

      <BottomNavigation />

      {selectorSide && (
        <CoinSelectorModal
          coins={coins}
          onClose={() => setSelectorSide(null)}
          onSelect={handleCoinSelect}
        />
      )}

      {showSlippageModal && (
        <SlippageModal
          slippage={slippage}
          setSlippage={setSlippage}
          onClose={() => setShowSlippageModal(false)}
        />
      )}

      {showConfirmModal && (
        <TradeConfirmationModal
          activeTab={activeTab}
          fromCoin={fromCoin}
          toCoin={toCoin}
          selectedCoin={selectedCoin}
          swapAmount={swapAmount}
          estimatedReceive={estimatedReceive}
          buySellAmount={buySellAmount}
          fiatEstimate={fiatEstimate}
          slippage={slippage}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmTrade}
        />
      )}

      {showSuccess && (
        <TradeSuccessScreen activeTab={activeTab} onDone={handleSuccessDone} />
      )}
    </MobileLayout>
  );
};

const SwapAssetCard = ({ label, coin, amount, onAmountChange, onSelect, isReceive }) => {
  return (
    <div className="bg-[#131A2E] rounded-[28px] p-5">
      <p className="text-[#8190B5] text-sm mb-4">{label}</p>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onSelect}
          className="flex items-center gap-3 min-w-0"
        >
          <img src={coin.icon} alt={coin.name} className="w-10 h-10 rounded-full" />

          <div className="text-left">
            <h3 className="text-white font-semibold">{coin.name}</h3>
            <p className="text-[#8190B5] text-sm">{coin.symbol}</p>
          </div>

          <ChevronDown size={18} className="text-[#8190B5]" />
        </button>

        {!isReceive ? (
          <input
            type="number"
            step="any"
            placeholder="0.00"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="w-32 bg-transparent text-right text-white text-[26px] font-bold outline-none"
          />
        ) : (
          <h3 className="text-white text-[26px] font-bold text-right truncate">
            {amount}
          </h3>
        )}
      </div>

      <p className="text-[#8190B5] text-sm mt-4">Balance: {coin.balance}</p>
    </div>
  );
};

const BuySellCoinList = ({
  title,
  description,
  coins,
  selectedCoin,
  setSelectedCoin,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-white text-[22px] font-bold">{title}</h2>
      <p className="text-[#8190B5] mt-2">{description}</p>

      <div className="mt-6 space-y-4">
        {coins.map((coin) => (
          <BuySellCoinRow
            key={coin.id}
            coin={coin}
            selected={selectedCoin.id === coin.id}
            onClick={() => setSelectedCoin(coin)}
          />
        ))}
      </div>
    </div>
  );
};

const BuySellCoinRow = ({ coin, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[24px] p-4 flex items-center justify-between transition border ${selected
        ? "bg-[#13213F] border-[#00E58F]/50"
        : "bg-[#131A2E] border-transparent"
        }`}
    >
      <div className="flex items-center gap-4">
        <img src={coin.icon} alt={coin.name} className="w-10 h-10 rounded-full" />

        <div className="text-left">
          <h3 className="text-white text-[17px] font-semibold">{coin.name}</h3>
          <p className="text-[#8190B5] text-sm">{coin.balance}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-white font-semibold">{coin.price}</p>

        <div className="flex items-center justify-end gap-3 mt-2">
          <span
            className={`text-sm font-semibold ${coin.positive ? "text-[#00E58F]" : "text-[#FF4D6D]"
              }`}
          >
            {coin.change}
          </span>

          {selected && <CheckCircle2 size={18} className="text-[#00E58F]" />}
        </div>
      </div>
    </button>
  );
};

const BuySellAmountCard = ({
  activeTab,
  selectedCoin,
  amount,
  estimate,
  onAmountChange,
}) => {
  return (
    <div className="mt-6 bg-[#131A2E] rounded-[28px] p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[#8190B5] text-sm">
            {activeTab === "Buy" ? "Amount to spend" : "Amount to sell"}
          </p>

          <input
            type="number"
            step="any"
            placeholder="0.00"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="w-full bg-transparent text-white text-[36px] font-bold outline-none mt-2"
          />

          <p className="text-[#8190B5] text-sm mt-2">
            {activeTab === "Buy"
              ? `Estimated receive: ${estimate} ${selectedCoin.symbol}`
              : `Estimated receive: $${estimate}`}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#08112D] rounded-full px-3 py-2 shrink-0">
          <img src={selectedCoin.icon} alt={selectedCoin.name} className="w-6 h-6 rounded-full" />

          <span className="text-white text-sm font-semibold">
            {selectedCoin.symbol}
          </span>
        </div>
      </div>
    </div>
  );
};

const QuickAmountButtons = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-4 gap-3 mt-5 mb-6">
      {quickAmounts.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className="h-11 rounded-full bg-[#131A2E] text-[#8190B5] font-semibold active:scale-[0.97] transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

const TradeDetailsCard = ({
  rate,
  fee,
  priceImpact,
  slippage,
  impactType,
}) => {
  const impactClass =
    impactType === "low"
      ? "text-[#00E58F]"
      : impactType === "medium"
        ? "text-[#FFB020]"
        : "text-[#FF4D6D]";

  return (
    <div className="bg-[#131A2E] rounded-[28px] p-5 mt-6 space-y-4">
      <InfoRow label="Exchange Rate" value={rate} />
      <InfoRow label="Estimated Network Fee" value={fee} />
      <InfoRow label="Max Slippage" value={`${slippage}%`} />

      <div className="flex items-center justify-between">
        <span className="text-[#8190B5]">Price Impact</span>
        <span className={`font-semibold ${impactClass}`}>{priceImpact}</span>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[#8190B5]">{label}</span>
      <span className="text-white font-medium text-right">{value}</span>
    </div>
  );
};

const PrimaryActionButton = ({ label, disabled, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`mt-8 w-full h-[58px] rounded-[18px] text-lg font-bold transition ${disabled
        ? "bg-[#131A2E] text-[#596582]"
        : "bg-[#00E58F] text-black active:scale-[0.98]"
        }`}
    >
      {label}
    </button>
  );
};

const CoinSelectorModal = ({ coins, onClose, onSelect }) => {
  const [query, setQuery] = useState("");

  const filteredCoins = coins.filter((coin) => {
    const searchText = `${coin.name} ${coin.symbol}`.toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-[100] bg-black/75 flex items-end justify-center">
      <div className="w-full max-w-[430px] bg-[#131A2E] rounded-t-[34px] p-5 pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-[22px] font-bold">Select Coin</h2>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#131A2E] flex items-center justify-center"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="mt-5 bg-[#131A2E] h-[52px] rounded-2xl px-4 flex items-center gap-3">
          <Search size={18} className="text-[#8190B5]" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search coin"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-[#8190B5]"
          />
        </div>

        <div className="mt-5 space-y-3">
          {filteredCoins.map((coin) => (
            <button
              key={coin.id}
              type="button"
              onClick={() => onSelect(coin)}
              className="w-full bg-[#131A2E] rounded-[22px] p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img src={coin.icon} alt={coin.name} className="w-10 h-10 rounded-full" />

                <div className="text-left">
                  <h3 className="text-white font-semibold">{coin.name}</h3>
                  <p className="text-[#8190B5] text-sm">{coin.symbol}</p>
                </div>
              </div>

              <span className="text-[#8190B5] text-sm">{coin.balance}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SlippageModal = ({ slippage, setSlippage, onClose }) => {
  const options = ["0.1", "0.5", "1.0", "2.0"];

  return (
    <div className="fixed inset-0 z-[100] bg-black/75 flex items-end justify-center">
      <div className="w-full max-w-[430px] bg-[#131A2E] rounded-t-[34px] p-5 pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-[22px] font-bold">
            Slippage Settings
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#131A2E] flex items-center justify-center"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <p className="text-[#8190B5] mt-3 leading-6">
          Your trade will only execute if the final price stays within this
          tolerance.
        </p>

        <div className="grid grid-cols-4 gap-3 mt-6">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSlippage(option)}
              className={`h-12 rounded-full font-semibold ${slippage === option
                ? "bg-[#00E58F] text-black"
                : "bg-[#111A39] text-[#8190B5]"
                }`}
            >
              {option}%
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full h-[56px] rounded-[18px] bg-[#00E58F] text-black font-bold"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

const TradeConfirmationModal = ({
  activeTab,
  fromCoin,
  toCoin,
  selectedCoin,
  swapAmount,
  estimatedReceive,
  buySellAmount,
  fiatEstimate,
  slippage,
  onClose,
  onConfirm,
}) => {
  const isSwap = activeTab === "Swap";

  return (
    <div className="fixed inset-0 z-[110] bg-black/80 flex items-end justify-center">
      <div className="w-full max-w-[430px] bg-[#08112D] rounded-t-[34px] p-5 pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-[22px] font-bold">
            Confirm {activeTab}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#111A39] flex items-center justify-center"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="mt-6 bg-[#111A39] rounded-[28px] p-5 space-y-4">
          {isSwap ? (
            <>
              <ConfirmRow
                label="You Pay"
                value={`${swapAmount} ${fromCoin.symbol}`}
              />

              <ConfirmRow
                label="You Receive"
                value={`${estimatedReceive} ${toCoin.symbol}`}
              />
            </>
          ) : (
            <>
              <ConfirmRow label="Asset" value={selectedCoin.name} />

              <ConfirmRow
                label={activeTab === "Buy" ? "You Spend" : "You Sell"}
                value={
                  activeTab === "Buy"
                    ? `$${buySellAmount}`
                    : `${buySellAmount} ${selectedCoin.symbol}`
                }
              />

              <ConfirmRow
                label="You Receive"
                value={
                  activeTab === "Buy"
                    ? `${fiatEstimate} ${selectedCoin.symbol}`
                    : `$${fiatEstimate}`
                }
              />
            </>
          )}

          <ConfirmRow label="Network Fee" value="$1.24" />
          <ConfirmRow label="Slippage" value={`${slippage}%`} />
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="mt-8 w-full h-[58px] rounded-[18px] bg-[#00E58F] text-black text-lg font-bold active:scale-[0.98] transition"
        >
          Confirm {activeTab}
        </button>
      </div>
    </div>
  );
};

const ConfirmRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[#8190B5]">{label}</span>
      <span className="text-white font-semibold text-right">{value}</span>
    </div>
  );
};

const TradeSuccessScreen = ({ activeTab, onDone }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center px-7">
      <div className="w-full max-w-[430px] text-center">
        <div className="mx-auto w-28 h-28 rounded-full bg-[#02251B] flex items-center justify-center">
          <CheckCircle2 size={64} className="text-[#00E58F]" />
        </div>

        <h1 className="text-white text-[30px] font-bold mt-8">
          {activeTab} Successful
        </h1>

        <p className="text-[#8190B5] mt-4 leading-7">
          Your crypto transaction has been completed successfully.
        </p>

        <button
          type="button"
          onClick={onDone}
          className="mt-10 w-full h-[58px] rounded-[18px] bg-[#00E58F] text-black text-lg font-bold"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TradePage;