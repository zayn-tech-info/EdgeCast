import { GoTrophy } from "react-icons/go";
import React from "react";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { LuAlignVerticalSpaceBetween } from "react-icons/lu";
import { LuSignalHigh } from "react-icons/lu";
import Chart from "../src/assets/images/chart.png";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import CandleChart from "./components/LineChart";

const Index = () => {
  const favourites = [
    {
      id: 1,
      coin: "ETH",
      price: "1,2750",
      percentage: 2.3,
    },
    {
      id: 2,
      coin: "BTC",
      price: "1,2750",
      percentage: -0.5,
    },
    {
      id: 3,
      coin: "BNB",
      price: "1,2750",
      percentage: 4.7,
    },
    {
      id: 4,
      coin: "SOL",
      price: "1,2750",
      percentage: -5.8,
    },
  ];
  return (
    <div className="dark:text-white text-black p-2 pr-3">
      <h1 className="md:text-2xl text-lg">Dashboard</h1>

      <div className="flex items-center w-full justify-between gap-2 mt-2">
        <div className="rounded-xl border-[1px] border-gray-200 dark:border-gray-800 bg-white dark:bg-primaryBlack w-[25%] py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-sm">Total Predictions</h1>
            <MdOutlineSettingsInputComponent />
          </div>

          <div className="pt-3">
            <p className="text-xl">24</p>
            <p className="text-[0.6rem]">18 Correct</p>
          </div>
        </div>

        <div className="rounded-xl border-[1px] border-gray-200 dark:border-gray-800 bg-white dark:bg-primaryBlack w-[25%] py-5 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-sm">Win rate</h1>
            <LuSignalHigh />
          </div>

          <div className="pt-3">
            <p className="text-xl">70%</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`bg-lightBlue h-full transition-all rounded-full duration-1000 ease-out`}
                style={{ width: 120 }}
              ></div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border-[1px] border-gray-200 dark:border-gray-800 bg-white dark:bg-primaryBlack w-[25%] py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-sm">Total Staked</h1>
            <LuAlignVerticalSpaceBetween />
          </div>

          <div className="pt-3">
            <p className="text-xl">$125.5</p>
            <p className="text-[0.6rem]">across all predictions</p>
          </div>
        </div>
        <div className="rounded-xl border-[1px] border-gray-200 dark:border-gray-800 bg-white dark:bg-primaryBlack w-[25%] py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-sm">Leader Rank</h1>
            <GoTrophy />
          </div>

          <div className="pt-3">
            <p className="text-xl">#48</p>
            <p className="text-[0.6rem]">Out of 1,247 players</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2  h-[50%] my-3">
        <div className="md:w-[70%] h-full bg-center bg-cover">
          {/* <CandleChart /> */}
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
                    <th className="py-3 px-4 text-left font-semibold">
                      Change
                    </th>
                    <th className="py-3 px-4 text-left font-semibold">
                      Balance
                    </th>
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
        </div>

        <div className="md:w-[30%] rounded-3xl bg-white dark:bg-primaryBlack dark:border-gray-800 dark:text-white text-black border-[1px] border-gray-200 py-5 px-6  ">
          <div className="flex items-center justify-between">
            <p className="text-sm">Favourites</p>
            <p className="text-[0.7rem] cursor-pointer">See all</p>
          </div>
          {favourites?.map((item) => (
            <div
              className={`flex items-center py-3 justify-between  ${
                item.id === favourites.length - 0
                  ? "border-b-0"
                  : "border-b-[1px] border-b-gray-200 dark:border-b-gray-800"
              }`}
            >
              <p>{item?.coin}</p>
              <div
                className={`text-sm ${
                  item?.percentage > 0 ? "text-green-400" : "text-red-500"
                }`}
              >
                <p>${item?.price}</p>
                <p className="flex items-center gap-2">
                  {item?.percentage > 0 ? (
                    <HiMiniArrowTrendingUp />
                  ) : (
                    <HiMiniArrowTrendingDown />
                  )}{" "}
                  {item?.percentage}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 mt-6">
        {/* Active Predictions */}
        <div className="w-1/2 bg-white dark:bg-primaryBlack rounded-xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="flex items-center gap-2 text-base font-semibold mb-2">
            <LuSignalHigh className="text-lightBlue" />
            Active Predictions
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            Your predictions waiting for resolution
          </p>
          {[
            {
              coin: "ETH",
              predicted: "$2,350",
              price: "$2,350",
              change: "+2.3%",
              status: "Winning",
              statusColor: "bg-blue-500",
              time: "14h 23m",
              changeColor: "text-green-500",
            },
            {
              coin: "BTC",
              predicted: "$2,350",
              price: "$2,350",
              change: "-2.3%",
              status: "Losing",
              statusColor: "bg-red-500",
              time: "14h 23m",
              changeColor: "text-red-500",
            },
            {
              coin: "SOL",
              predicted: "$2,350",
              price: "$2,350",
              change: "+2.3%",
              status: "Winning",
              statusColor: "bg-blue-500",
              time: "14h 23m",
              changeColor: "text-green-500",
            },
          ].map((item, idx) => (
            <div
              key={item.coin}
              className={`flex items-center justify-between py-3 ${
                idx < 2 ? "border-b border-gray-200 dark:border-gray-800" : ""
              }`}
            >
              <div>
                <p className="font-semibold">{item.coin}</p>
                <p className="text-xs text-gray-500">
                  Predicted: {item.predicted}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.price}</p>
                <p
                  className={`text-xs flex items-center gap-1 ${item.changeColor}`}
                >
                  {item.change}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`text-xs px-3 py-1 rounded-full text-white ${item.statusColor}`}
                >
                  {item.status}
                </span>
                <span className="text-[0.7rem] text-gray-400 mt-1">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Recent Results */}
        <div className="w-1/2 bg-white dark:bg-primaryBlack rounded-xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="flex items-center gap-2 text-base font-semibold mb-2">
            <GoTrophy className="text-lightBlue" />
            Recent Results
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            Your latest prediction outcomes
          </p>
          {[
            {
              coin: "ETH",
              predicted: "$2,350",
              actual: "$2,250",
              result: "Win",
              resultColor: "bg-blue-500",
              profit: "+$84.4",
              profitColor: "text-green-500",
            },
            {
              coin: "BTC",
              predicted: "$2,350",
              actual: "$2,250",
              result: "Win",
              resultColor: "bg-blue-500",
              profit: "+$25",
              profitColor: "text-green-500",
            },
            {
              coin: "ADA",
              predicted: "$2,350",
              actual: "$2,750",
              result: "Loss",
              resultColor: "bg-red-500",
              profit: "-$20",
              profitColor: "text-red-500",
            },
          ].map((item, idx) => (
            <div
              key={item.coin}
              className={`flex items-center justify-between py-3 ${
                idx < 2 ? "border-b border-gray-200 dark:border-gray-800" : ""
              }`}
            >
              <div>
                <p className="font-semibold">{item.coin}</p>
                <p className="text-xs text-gray-500">
                  Predicted: {item.predicted}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Actual: {item.actual}</p>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`text-xs px-3 py-1 rounded-full text-white ${item.resultColor}`}
                >
                  {item.result}
                </span>
                <span className={`text-[0.7rem] mt-1 ${item.profitColor}`}>
                  {item.profit}
                </span>
              </div>
            </div>
          ))}
          <button className="w-full mt-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
            View All Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
