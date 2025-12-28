"use client";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useDashboardStore } from "@/store/dashboardStore";
import StockCard from "./widgets/StockCard";
import AddWidgetModal from "./AddWidgetModal";

export default function DashboardGrid() {
  const { widgets, setWidgets } = useDashboardStore();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = widgets.findIndex(w => w.id === active.id);
      const newIndex = widgets.findIndex(w => w.id === over.id);
      setWidgets(arrayMove(widgets, oldIndex, newIndex));
    }
  };

  return (
    <div className="space-y-6">
      <AddWidgetModal />

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={widgets.map(w => w.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {widgets.map(widget => (
              <StockCard key={widget.id} widget={widget} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
