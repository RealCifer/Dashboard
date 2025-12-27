"use client";

import { useDashboardStore } from "../store";
import { v4 as uuidv4 } from "uuid";

export default function AddWidgetModal() {
  const addWidget = useDashboardStore((state) => state.addWidget);

  const handleAdd = () => {
    addWidget({
      id: uuidv4(),
      title: "Stock Widget",
      type: "card",
      apiUrl: "",
      refreshInterval: 30,
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="border border-dashed border-gray-500 hover:border-white text-gray-400 hover:text-white rounded-lg p-6 transition"
    >
      + Add Widget
    </button>
  );
}
