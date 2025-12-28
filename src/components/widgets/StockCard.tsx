"use client";

import { useEffect, useState } from "react";
import { fetchStockData } from "@/services/alphaVantage";
import { useDashboardStore } from "@/store/dashboardStore";

export default function StockCard({ widget }: any) {
  const removeWidget = useDashboardStore((s) => s.removeWidget);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await fetchStockData(widget.symbol);
      setData(result);
      setLoading(false);
    }

    load();
  }, [widget.symbol]);

  if (loading)
    return (
      <div className="bg-gray-900 p-4 rounded text-gray-400">
        Loading...
      </div>
    );

  if (!data.length)
    return (
      <div className="bg-gray-900 p-4 rounded text-red-400">
        No data available
      </div>
    );

  return (
    <div className="bg-gray-900 p-4 rounded">
      <div className="flex justify-between mb-2">
        <h3 className="text-white">{widget.title}</h3>
        <button
          onClick={() => removeWidget(widget.id)}
          className="text-red-400"
        >
          ✕
        </button>
      </div>

      <p className="text-green-400 text-lg">
        ${data[0]?.price}
      </p>
    </div>
  );
}
