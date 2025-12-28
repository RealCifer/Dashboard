"use client";

import { useEffect, useState } from "react";
import { fetchStockData } from "@/services/alphaVantage";
import StockChart from "./StockChart";
import { useDashboardStore } from "@/store/dashboardStore";

export default function StockCard({ widget }: any) {
  const removeWidget = useDashboardStore((s) => s.removeWidget);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchStockData(widget.symbol).then(setData);
  }, [widget.symbol]);

  return (
    <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700">
      <div className="flex justify-between mb-2">
        <h3 className="text-white font-semibold">{widget.title}</h3>
        <button
          onClick={() => removeWidget(widget.id)}
          className="text-red-400 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      <StockChart data={data} />
    </div>
  );
}
