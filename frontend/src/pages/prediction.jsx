import React from "react";

const Prediction = () => {
  const [selectedPair, setSelectedPair] = React.useState("BTC/USDT");
  const [prediction, setPrediction] = React.useState("");
  const [submittedPrediction, setSubmittedPrediction] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const pairs = ["BTC/USDT", "ETH/USDT", "BNB/USDT", "SOL/USDT", "XRP/USDT"];

  const handlePairChange = (e) => {
    setSelectedPair(e.target.value);
    setSubmittedPrediction(null);
    setPrediction("");
  };

  const handlePredictionChange = (e) => {
    setPrediction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedPrediction(prediction);
  };

  // Simulated current prices for demonstration
  const currentPrices = {
    "BTC/USDT": 67000.23,
    "ETH/USDT": 3500.12,
    "BNB/USDT": 600.45,
    "SOL/USDT": 150.67,
    "XRP/USDT": 0.52,
  };

  return (
    <React.Fragment>
      <div className=" mt-8">
        <div className="mb-8"></div>
        <div className="flex w-full items-center justify-between mb-4">
          <h1 className="text-4xl font-bold dark:text-white text-primaryBlack tracking-tight">
            Crypto Staking
          </h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-700 transition">
              All
            </button>
            <button className="px-4 py-2 rounded-lg dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-700 transition">
              Week
            </button>
            <button className="px-4 py-2 rounded-lg dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-700 transition">
              Month
            </button>
            <button className="px-4 py-2 rounded-lg dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-700 transition">
              Year
            </button>
            <div className="ml-4 px-4 py-2 rounded-lg dark:bg-gray-900 bg-white  dark:text-gray-300 text-secondaryBlack font-medium border border-gray-200 dark:border-gray-800">
              <span className="mr-2">18 Jan, 2025</span>
              <span className="mx-1">–</span>
              <span>18 Jun, 2025</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white  dark:bg-gray-900 rounded-2xl p-6 shadow-lg border dark:border-gray-700 border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 rounded-full p-3 mr-3">
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                  alt="ETH"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <div className="text-lg font-semibold dark:text-white text-secondaryBlack">
                  Ethereum (ETH)
                </div>
                <div className="text-xs text-gray-400">Proof of Stake</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">18.74%</div>
            <div className="text-xs text-green-500 mb-2">
              Reward Rate <span className="ml-1">▲ 56.25%</span>
            </div>
            <div className="flex items-end gap-2 h-16">
              {[4, 6, 5, 7, 6, 8].map((v, i) => (
                <div
                  key={i}
                  className="bg-green-400/80 rounded w-4"
                  style={{ height: `${v * 10}px` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
          <div className="bg-white  dark:bg-gray-900 rounded-2xl p-6 shadow-lg border dark:border-gray-700 border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-red-700 rounded-full p-3 mr-3">
                <img
                  src="https://cryptologos.cc/logos/tron-trx-logo.png"
                  alt="TRX"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <div className="text-lg font-semibold dark:text-white text-secondaryBlack">
                  Tron (TRX)
                </div>
                <div className="text-xs text-gray-400">Proof of Stake</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-red-400 mb-2">6.28%</div>
            <div className="text-xs text-red-500 mb-2">
              Reward Rate <span className="ml-1">▼ 18.65%</span>
            </div>
            <div className="flex items-end gap-2 h-16">
              {[2, 4, 8, 6, 3, 2].map((v, i) => (
                <div
                  key={i}
                  className="bg-purple-400/80 rounded w-4"
                  style={{ height: `${v * 10}px` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
          <div className="bg-white  dark:bg-gray-900 rounded-2xl p-6 shadow-lg border dark:border-gray-700 border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-purple-700 rounded-full p-3 mr-3">
                <img
                  src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                  alt="POL"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <div className="text-lg font-semibold dark:text-white text-secondaryBlack">
                  Polygon (POL)
                </div>
                <div className="text-xs text-gray-400">Proof of Stake</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              24.56%
            </div>
            <div className="text-xs text-green-500 mb-2">
              Reward Rate <span className="ml-1">▲ 57.44%</span>
            </div>
            <div className="flex items-end gap-2 h-16">
              {[5, 7, 6, 8, 7, 9].map((v, i) => (
                <div
                  key={i}
                  className="bg-yellow-400/80 rounded w-4"
                  style={{ height: `${v * 10}px` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Top 100 Crypto Assets
          </h2>
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 rounded border-gray-200 dark:border-gray-800 dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack text-sm font-medium">
              24H
            </button>
            <button className="px-3 py-1 rounded border-gray-200 dark:border-gray-800 dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack text-sm font-medium">
              All
            </button>
            <button className="px-3 py-1 rounded border-gray-200 dark:border-gray-800 dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack text-sm font-medium">
              Memes
            </button>
            <button className="px-3 py-1 rounded border-gray-200 dark:border-gray-800 dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack text-sm font-medium">
              AI
            </button>
            <button className="px-3 py-1 rounded border-gray-200 dark:border-gray-800 dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack text-sm font-medium">
              Solana Eco
            </button>
            <button className="px-3 py-1 rounded border-gray-200 dark:border-gray-800 dark:bg-gray-800 bg-white  dark:text-gray-200 text-secondaryBlack text-sm font-medium">
              Gaming
            </button>
          </div>
          <div className="dark:bg-gray-900 bg-white  rounded-xl shadow border dark:border-gray-700 border-gray-200 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-gray-700">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">1H</th>
                  <th className="py-3 px-4">24H</th>
                  <th className="py-3 px-4">Market Cap</th>
                  <th className="py-3 px-4">Volume</th>
                  <th className="py-3 px-4">Last 7 Days</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-800 border-gray-200">
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack font-bold">
                    1
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img
                      src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                      alt="BTC"
                      className="w-6 h-6"
                    />
                    <span className="dark:text-white text-secondaryBlack font-semibold">
                      Bitcoin BTC
                    </span>
                  </td>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack">
                    $84,333.10
                  </td>
                  <td className="py-3 px-4 text-green-400">▲ 2.19%</td>
                  <td className="py-3 px-4 text-green-400">▲ 7.76%</td>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack">
                    $2,271,832,005,073
                  </td>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack">
                    $68,629,394,998
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src="https://www.coingecko.com/coins/1/sparkline.svg"
                      alt="BTC 7d"
                      className="h-6"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack font-bold">
                    2
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img
                      src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                      alt="ETH"
                      className="w-6 h-6"
                    />
                    <span className="dark:text-white text-secondaryBlack font-semibold">
                      Ethereum ETH
                    </span>
                  </td>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack">
                    $3,533.10
                  </td>
                  <td className="py-3 px-4 text-green-400">▲ 4.15%</td>
                  <td className="py-3 px-4 text-green-400">▲ 2.81%</td>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack">
                    $591,189,123,274
                  </td>
                  <td className="py-3 px-4 dark:text-white text-secondaryBlack">
                    $68,629,394,998
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src="https://www.coingecko.com/coins/279/sparkline.svg"
                      alt="ETH 7d"
                      className="h-6"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
        Futures Trading Prediction
      </h2>
      {/* Current Price Section */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
        <span className="text-gray-700 font-medium mr-2">
          Current Price of {selectedPair}:
        </span>
        <span className="text-blue-700 font-bold text-lg">
          ${currentPrices[selectedPair]}
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow border border-gray-200 dark:border-gray-800 dark:bg-primaryBlack "
      >
        <label className="block mb-4">
          <span className="block text-gray-700 dark:text-white font-medium mb-2">
            Select Pair
          </span>
          <div className="relative">
            <button
              type="button"
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-primaryBlack text-gray-700 dark:text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen ? "true" : "false"}
            >
              {selectedPair ? selectedPair : "Select Pair"}
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
                className="ml-2 text-gray-400"
              >
                <path
                  d="M7 8l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul
                className="absolute z-10 w-full mt-1 bg-white dark:bg-primaryBlack border dark:border-gray-600 border-gray-200 rounded-lg shadow-lg"
                role="listbox"
              >
                {pairs.map((pair) => (
                  <li
                    key={pair}
                    role="option"
                    aria-selected={selectedPair === pair}
                    className={`px-4 py-3 cursor-pointer hover:bg-blue-200 ${
                      selectedPair === pair
                        ? "bg-blue-100 dark:bg-lightBlue font-semibold"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedPair(pair);
                      setDropdownOpen(false);
                      setSubmittedPrediction(null);
                      setPrediction("");
                    }}
                  >
                    {pair}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </label>
        <label className="block mb-6">
          <span className="block text-gray-700 dark:text-white font-medium mb-2">
            Predict Price
          </span>
          <input
            type="number"
            value={prediction}
            onChange={handlePredictionChange}
            placeholder="Enter price"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-primaryBlack dark:border-gray-600 text-gray-700 dark:text-white shadow-sm transition"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Prediction
        </button>
      </form>
      {submittedPrediction && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <strong className="text-gray-800">{selectedPair}:</strong> Predicted
          Price is{" "}
          <span className="text-green-700 font-bold">
            {submittedPrediction}
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Prediction;
