"use client";

import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useDashboardStore } from "@/store/dashboardStore";
import dynamic from "next/dynamic";

const StockCard = dynamic(() => import("./widgets/StockCard"), {
  ssr: false,
});
import AddWidgetModal from "./AddWidgetModal";

export default function DashboardGrid() {
  const { widgets, setWidgets } = useDashboardStore();

const handleDragEnd = (event: any) => {
  const { active, over } = event;
  if (!over || active.id === over.id) return;

  const oldIndex = widgets.findIndex((w) => w.id === active.id);
  const newIndex = widgets.findIndex((w) => w.id === over.id);

  setWidgets(arrayMove(widgets, oldIndex, newIndex));
};


  return (
    <div className="space-y-6">
      <AddWidgetModal />

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={widgets.map((w) => w.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {widgets.map((widget) => (
              <StockCard key={widget.id} widget={widget} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
