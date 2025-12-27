"use client";

import { useDashboardStore } from "@/store";
import StockCard from "./widgets/StockCard";
import AddWidgetModal from "./AddWidgetModal";

export default function DashboardGrid() {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Groww Finance Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Track your financial widgets in one place
        </p>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {widgets.map((widget) => (
          <StockCard key={widget.id} widget={widget} />
        ))}

        <AddWidgetModal />
      </div>
    </div>
  );
}
