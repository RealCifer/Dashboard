"use client";

import { Widget } from "@/types/widget";
import { useDashboardStore } from "@/store";

interface Props {
  widget: Widget;
}

export default function StockCard({ widget }: Props) {
  const removeWidget = useDashboardStore((s) => s.removeWidget);

  return (
    <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white font-semibold">{widget.title}</h3>
        <button
          onClick={() => removeWidget(widget.id)}
          className="text-red-400 hover:text-red-500 text-sm"
        >
          Remove
        </button>
      </div>

      <p className="text-sm text-gray-400">
        Widget Type: <span className="text-gray-200">{widget.type}</span>
      </p>
    </div>
  );
}
