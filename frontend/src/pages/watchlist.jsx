import React from "react";

const Watchlist = () => {
  return (
    <div className=" min-h-screen p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 bg-gradient-to-br bg-white dark:bg-primaryBlack rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl text-blue-700 dark:text-white font-bold tracking-tight">
                Watchlist
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Updated: 23/07/2021 at 04:30 PM
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-2 rounded-xl shadow hover:from-blue-600 hover:to-blue-500 transition font-semibold">
              + Watchlist
            </button>
          </div>
          <div className="flex gap-4 mb-6">
            <select className="border-gray-200 dark:border-gray-800 border rounded-lg px-3 py-2 text-sm bg-white dark:bg-primaryBlack shadow focus:outline-none">
              <option>Watchlist</option>
              <option>Portfolio</option>
            </select>
            <input
              type="text"
              placeholder="Search assets..."
              className="border-gray-200 border dark:border-gray-800 rounded-lg px-4 py-2 text-sm flex-1 bg-white dark:bg-primaryBlack shadow focus:outline-none"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 text-blue-700 dark:text-white border-b border-b-blue-200 dark:border-b-gray-800">
                  <th className="py-3 px-4 text-left font-semibold">Asset</th>
                  <th className="py-3 px-4 text-left font-semibold">Price</th>
                  <th className="py-3 px-4 text-left font-semibold">Change</th>
                  <th className="py-3 px-4 text-left font-semibold">Balance</th>
                  <th className="py-3 px-4 text-left font-semibold">Trend</th>
                  <th className="py-3 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "BTC",
                    desc: "Bitcoin",
                    price: "$ 291.01",
                    value: "+ 260.01",
                    balance: "$ 291.01",
                    chart: "up",
                    color: "green",
                  },
                  {
                    name: "ETH",
                    desc: "Ethereum",
                    price: "$ 291.01",
                    value: "- 260.01",
                    balance: "$ 291.01",
                    chart: "down",
                    color: "red",
                  },
                  {
                    name: "SOL",
                    desc: "Solana",
                    price: "$ 291.01",
                    value: "+ 260.01",
                    balance: "$ 291.01",
                    chart: "up",
                    color: "green",
                  },
                  {
                    name: "BNB",
                    desc: "Binance",
                    price: "$ 291.01",
                    value: "- 260.01",
                    balance: "$ 291.01",
                    chart: "down",
                    color: "red",
                  },
                  {
                    name: "PI",
                    desc: "Pi Network",
                    price: "$ 291.01",
                    value: "+ 260.01",
                    balance: "$ 291.01",
                    chart: "up",
                    color: "green",
                  },
                  {
                    name: "TRN",
                    desc: "Tron",
                    price: "$ 291.01",
                    value: "- 260.01",
                    balance: "$ 291.01",
                    chart: "down",
                    color: "red",
                  },
                  {
                    name: "AAPL",
                    desc: "Apple Inc",
                    price: "$ 291.01",
                    value: "+ 260.01",
                    balance: "$ 291.01",
                    chart: "up",
                    color: "green",
                  },
                ].map((stock, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-b-gray-100 dark:border-b-gray-800 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="py-3 px-4 flex items-center gap-3">
                      <span
                        className={`bg-blue-200 dark:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-base text-blue-700 dark:text-white shadow`}
                      >
                        {stock.name[0]}
                      </span>
                      <span className="font-semibold">{stock.name}</span>
                      <span className="text-gray-400 text-xs ml-2">
                        {stock.desc}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium">{stock.price}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        stock.color === "green"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {stock.value}
                    </td>
                    <td className="py-3 px-4">{stock.balance}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block w-16 h-4 rounded-full ${
                          stock.chart === "up" ? "bg-green-100" : "bg-red-100"
                        }`}
                      ></span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-1 rounded-lg hover:from-blue-600 hover:to-blue-500 text-xs font-semibold shadow transition">
                        Buy
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          {/* Stock Card */}
          <div className="bg-white dark:bg-primaryBlack text-secondaryBlack dark:text-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Stock</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs text-gray-500 mb-1">Enter</label>
              <input
                type="text"
                className="border border-gray-200 dark:border-gray-800 rounded px-2 py-1 w-full"
                placeholder="Enter value"
              />
            </div>
            <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
              Button
            </button>
          </div>
          {/* Stock Market List */}
          <div className="bg-white dark:bg-primaryBlack text-secondaryBlack dark:text-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">Stock Market</span>
              <button className="text-xs text-blue-500">See All</button>
            </div>
            <ul className="space-y-3">
              {["AAPL", "AMZN", "GOOG", "MSFT", "TSLA", "FB"].map(
                (stock, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                      {stock[0]}
                    </span>
                    <span className="font-semibold">{stock}</span>
                    <span className="text-gray-400 text-xs">random</span>
                    <span className="inline-block w-12 h-3 rounded bg-green-100"></span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
