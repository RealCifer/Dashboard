"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import StockCard from "./widgets/StockCard";
import AddWidgetModal from "./AddWidgetModal";

export default function DashboardGrid() {
  const widgets = useDashboardStore((s) => s.widgets);

  return (
    <div className="grid grid-cols-3 gap-4">
      {widgets.map((widget) => (
        <StockCard key={widget.id} widget={widget} />
      ))}
      <AddWidgetModal />
    </div>
  );
}
