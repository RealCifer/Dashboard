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
      setLoading(true);
      const result = await fetchStockData(widget.symbol);
      setData(result);
      setLoading(false);
    }
    load();
  }, [widget.symbol]);

  return (
    <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{widget.title}</h3>
        <button
          onClick={() => removeWidget(widget.id)}
          className="text-red-400 hover:text-red-600"
        >
          Remove
        </button>
      </div>

      {loading && <p className="text-gray-400">Loading chart...</p>}

      {!loading && data.length === 0 && (
        <p className="text-yellow-400">API limit reached</p>
      )}

      {!loading && data.length > 0 && (
        <p className="text-green-400">
          Latest Price: ₹{data[0].price}
        </p>
      )}
    </div>
  );
}
