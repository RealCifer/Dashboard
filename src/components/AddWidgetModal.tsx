"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import { v4 as uuidv4 } from "uuid";

export default function AddWidgetModal() {
  const addWidget = useDashboardStore((s) => s.addWidget);

  return (
    <button
      onClick={() =>
        addWidget({
          id: uuidv4(),
          type: "stock",
          title: "Stock Price",
          symbol: "IBM",
        })
      }
      className="border border-dashed border-gray-500 px-4 py-3 rounded text-gray-300 hover:bg-gray-800"
    >
      + Add Widget
    </button>
  );
}
