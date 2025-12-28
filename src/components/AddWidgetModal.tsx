"use client";

import { useDashboardStore } from "@/store";
import { v4 as uuidv4 } from "uuid";

export default function AddWidgetModal() {
  const addWidget = useDashboardStore((state) => state.addWidget);

  return (
    <div className="flex gap-4">
      {}
      <button
        onClick={() =>
          addWidget({
            id: uuidv4(),
            title: "Stock Price",
            type: "stock",
          })
        }
        className="border border-dashed border-gray-500 px-4 py-6 rounded text-gray-300 hover:bg-gray-800 transition"
      >
        + Add Stock
      </button>

      {}
      <button
        onClick={() =>
          addWidget({
            id: uuidv4(),
            title: "Stock Chart",
            type: "chart",
          })
        }
        className="border border-dashed border-gray-500 px-4 py-6 rounded text-gray-300 hover:bg-gray-800 transition"
      >
        + Add Chart
      </button>
    </div>
  );
}
