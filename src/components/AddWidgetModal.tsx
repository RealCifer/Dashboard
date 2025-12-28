"use client";

import { useState } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import { v4 as uuidv4 } from "uuid";

export default function AddWidgetModal() {
  const addWidget = useDashboardStore((s) => s.addWidget);

  const [title, setTitle] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleAdd = () => {
    if (!title || !symbol) return;

    addWidget({
      id: uuidv4(),
      type: "stock",
      title,
      symbol: symbol.toUpperCase(),
    });

    setTitle("");
    setSymbol("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        className="px-3 py-2 bg-zinc-800 rounded text-white"
        placeholder="Widget title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="px-3 py-2 bg-zinc-800 rounded text-white"
        placeholder="Stock Symbol (AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
      >
        Add
      </button>
    </div>
  );
}
