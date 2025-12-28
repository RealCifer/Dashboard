"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/store";
import StockCard from "./widgets/StockCard";
import StockChart from "./widgets/StockChart";
import AddWidgetModal from "./AddWidgetModal";

export default function DashboardGrid() {
  const { widgets, loadWidgets } = useDashboardStore();

  useEffect(() => {
    loadWidgets();
  }, [loadWidgets]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map((widget) => {
          if (widget.type === "stock") {
            return <StockCard key={widget.id} widget={widget} />;
          }

          if (widget.type === "chart") {
            return <StockChart key={widget.id} />;
          }

          return null;
        })}
      </div>

      <AddWidgetModal />
    </div>
  );
}
