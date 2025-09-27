import React from "react";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import {
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
} from "chartjs-chart-financial";

import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

// ✅ Register only these
ChartJS.register(
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

export default function CandleChart() {
  const data = {
    datasets: [
      {
        label: "AMZ",
        data: [
          { x: "2025-01-01", o: 3500, h: 4000, l: 3200, c: 3800 },
          { x: "2025-01-02", o: 3800, h: 4200, l: 3600, c: 4100 },
          { x: "2025-01-03", o: 4100, h: 4300, l: 3900, c: 3950 },
        ],
        color: {
          up: "#00C853",
          down: "#D50000",
          unchanged: "#999999",
        },
        borderColor: "#333",
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { type: "time", time: { unit: "day" } },
      y: { type: "linear" }, // ✅ just use linear, plugin handles candle drawing
    },
  };

  return (
    <div className="w-full h-[25rem] border rounded-xl p-4">
      <Chart type="candlestick" data={data} options={options} />
    </div>
  );
}
