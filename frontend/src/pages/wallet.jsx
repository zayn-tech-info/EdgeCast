import React from "react";

const Wallet = () => {
  const [activeTab, setActiveTab] = React.useState("buy");
  const [coin, setCoin] = React.useState("Ethereum ETH");
  const [amount, setAmount] = React.useState("1342.00");
  const [currency, setCurrency] = React.useState("USD");

  // Tab switch handler
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  // Coin change handler
  const handleCoinChange = (e) => {
    setCoin(e.target.value);
  };

  // Amount change handler
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Currency change handler
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="min-h-screen text-white font-inter p-8 ">
      {/* Upgrade Banner */}
      <div className="bg-gradient-to-r from-[#6C47FF] to-[#1E90FF] rounded-2xl p-6 flex items-center mb-8 justify-between">
        <div>
          <div className="text-[20px] font-semibold">
            Upgrade Your Plan to <span className="text-[#FFD600]">Premium</span>
          </div>
          <div className="text-[16px] mt-1">and Get unlimited access</div>
        </div>
        <button
          className="bg-white text-[#6C47FF] rounded-lg px-6 py-3 font-semibold cursor-pointer border-none"
          type="button"
        >
          Upgrade Now
        </button>
        <div className="flex gap-4 ml-8">
          <span className="text-[32px]">₿</span>
          <span className="text-[32px]">🟦</span>
          <span className="text-[32px]">🔷</span>
        </div>
      </div>
      <div className="flex gap-8 mb-8">
        {/* Stats */}
        <div className="flex gap-6">
          <div className="bg-[#A3FFB0] text-[#181A20] rounded-xl px-8 py-6 min-w-[140px] text-center">
            <div className="text-2xl font-bold">$1,234</div>
            <div className="text-sm font-medium">Total Assets</div>
          </div>
          <div className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-xl px-8 py-6 min-w-[140px] text-center">
            <div className="text-2xl font-bold">$2,556</div>
            <div className="text-sm font-medium">Total Deposits</div>
          </div>
          <div className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-xl px-8 py-6 min-w-[140px] text-center">
            <div className="text-2xl font-bold">+8.6%</div>
            <div className="text-sm font-medium">APY</div>
          </div>
        </div>
        {/* Balance */}
        <div className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-2xl p-6 min-w-[220px] text-center flex-1">
          <div className="text-lg font-medium mb-2">Total Balance</div>
          <div className="text-3xl font-bold">$15,453.05</div>
          <div className="bg-[#A3FFB0] text-[#181A20] rounded-lg inline-block px-3 py-1 font-semibold mt-2">
            +2.34%
          </div>
        </div>
      </div>
      {/* Main Section */}
      <div className="flex gap-8">
        {/* Portfolio Performance */}
        <div className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-2xl p-6 flex-2 min-w-0 w-full">
          <div className="font-semibold text-lg mb-4">
            Portfolio performance
          </div>
          {/* Tabs */}
          <div className="flex gap-6 mb-4">
            <span className="text-white font-semibold border-b-2 border-[#6C47FF] pb-1 cursor-pointer">
              Performance
            </span>
            <span className="text-[#888] cursor-pointer">Statistic</span>
            <span className="text-[#888] cursor-pointer">Transactions</span>
          </div>
          {/* Chart (Mock) */}
          <div className="h-[220px] relative mb-4">
            <svg width="100%" height="100%" viewBox="0 0 500 220">
              <polyline
                fill="none"
                stroke="#6C47FF"
                strokeWidth="3"
                points="0,180 50,160 100,140 150,120 200,100 250,80 300,120 350,160 400,100 450,60 500,40"
              />
              <polyline
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeDasharray="4"
                points="0,180 100,140 200,100 300,120 400,100 500,40"
              />
              {/* Dot and label */}
              <circle cx="200" cy="100" r="6" fill="#fff" />
              <rect
                x="210"
                y="70"
                width="80"
                height="32"
                rx="8"
                fill="#23262F"
                stroke="#6C47FF"
                strokeWidth="2"
              />
              <text x="220" y="90" fill="#fff" fontSize="14" fontWeight="bold">
                $2,453.08
              </text>
            </svg>
          </div>
          {/* Chart Controls */}
          <div className="flex gap-3">
            <button className="bg-[#6C47FF] text-white border-none rounded-lg px-4 py-2 font-semibold cursor-pointer">
              1D
            </button>
            <button className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-lg px-4 py-2 font-semibold cursor-pointer">
              1W
            </button>
            <button className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-lg px-4 py-2 font-semibold cursor-pointer">
              1M
            </button>
          </div>
        </div>
        {/* Buy/Sell/Exchange */}
        <div className="dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white rounded-2xl p-6 min-w-[320px] flex-1">
          <div className="flex gap-3 mb-4">
            <button
              className={`px-6 py-2 font-semibold rounded-lg cursor-pointer border-none ${
                activeTab === "buy"
                  ? "bg-[#6C47FF] text-white"
                  : "dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white"
              }`}
              onClick={() => handleTabSwitch("buy")}
              type="button"
            >
              Buy
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-lg cursor-pointer border-none ${
                activeTab === "sell"
                  ? "bg-[#6C47FF] text-white"
                  : "dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white"
              }`}
              onClick={() => handleTabSwitch("sell")}
              type="button"
            >
              Sell
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-lg cursor-pointer border-none ${
                activeTab === "exchange"
                  ? "bg-[#6C47FF] text-white"
                  : "dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white"
              }`}
              onClick={() => handleTabSwitch("exchange")}
              type="button"
            >
              Exchange
            </button>
          </div>
          <div className="mb-4">
            <div className="font-medium mb-2">Coin</div>
            <select
              className="w-full p-2.5 rounded-lg dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white font-semibold"
              value={coin}
              onChange={handleCoinChange}
            >
              <option>Ethereum ETH</option>
              <option>Bitcoin BTC</option>
              <option>Solana SOL</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="font-medium mb-2">Amount</div>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full p-2.5 rounded-lg dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white font-semibold"
            />
            <select
              className="mt-2 w-full p-2.5 rounded-lg dark:bg-[#23262F] bg-white border-gray-200 dark:border-gray-800 border text-secondaryBlack dark:text-white font-semibold"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <div className="font-semibold text-lg mb-4">Total: ${amount}</div>
          <button className="dark:bg-white bg-secondaryBlack dark:text-[#6C47FF] text-white border-none rounded-lg py-3 w-full font-bold text-base cursor-pointer">
            {activeTab === "buy"
              ? `Buy ${coin.split(" ")[0]}`
              : activeTab === "sell"
              ? `Sell ${coin.split(" ")[0]}`
              : `Exchange ${coin.split(" ")[0]}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
