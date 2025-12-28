"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type StockPoint = {
  time: string;
  price: number;
};

export default function StockChart({ data }: { data: StockPoint[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-gray-400 text-sm text-center py-6">
        No chart data available
      </div>
    );
  }

  return (
    <div className="w-full h-60">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
