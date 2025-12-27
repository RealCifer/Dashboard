"use client";

import { Widget } from "@/types/widget";
import { useDashboardStore } from "@/store";

interface Props {
  widget: Widget;
}

export default function StockCard({ widget }: Props) {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 shadow-md transition hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">
          {widget.title}
        </h3>

        <button
          onClick={() => removeWidget(widget.id)}
          className="text-sm text-red-400 hover:text-red-600 transition"
        >
          Remove
        </button>
      </div>

      <p className="text-sm text-gray-400">
        Type: <span className="text-gray-300">{widget.type}</span>
      </p>
    </div>
  );
}
