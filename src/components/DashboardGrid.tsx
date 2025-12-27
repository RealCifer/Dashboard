"use client";

import { useDashboardStore } from "../store";
import AddWidgetModal from "./AddWidgetModal";

export default function DashboardGrid() {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {widgets.length === 0 && (
        <div className="col-span-full text-gray-400">
          No widgets yet. Click below to add one.
        </div>
      )}

      {widgets.map((widget) => (
        <div
          key={widget.id}
          className="bg-zinc-900 p-4 rounded-lg border border-zinc-800"
        >
          <h3 className="font-semibold">{widget.title}</h3>
          <p className="text-sm text-gray-400">
            Type: {widget.type}
          </p>
        </div>
      ))}

      <AddWidgetModal />
    </div>
  );
}
