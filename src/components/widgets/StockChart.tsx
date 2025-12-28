"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", price: 120 },
  { name: "Tue", price: 150 },
  { name: "Wed", price: 130 },
  { name: "Thu", price: 170 },
  { name: "Fri", price: 160 },
];

export default function StockChart() {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 shadow-md">
      <h3 className="text-white font-semibold mb-3">Stock Trend</h3>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#22c55e"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
