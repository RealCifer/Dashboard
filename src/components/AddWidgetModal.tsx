"use client";

import { useDashboardStore } from "@/store";
import { v4 as uuidv4 } from "uuid";

export default function AddWidgetModal() {
  const addWidget = useDashboardStore((state) => state.addWidget);

  return (
    <button
      onClick={() =>
        addWidget({
          id: uuidv4(),
          title: "Stock Price",
          type: "stock",
        })
      }
      className="flex items-center justify-center border-2 border-dashed border-gray-600 rounded-xl p-6 text-gray-300 hover:border-gray-400 hover:text-white transition"
    >
      + Add Widget
    </button>
  );
}
