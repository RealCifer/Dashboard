import { create } from "zustand";
import { Widget } from "@/types/widget";

interface DashboardStore {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
  removeWidget: (id: string) => void;
  loadWidgets: () => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  widgets: [],

  addWidget: (widget) =>
    set((state) => {
      const updated = [...state.widgets, widget];
      localStorage.setItem("widgets", JSON.stringify(updated));
      return { widgets: updated };
    }),

  removeWidget: (id) =>
    set((state) => {
      const updated = state.widgets.filter((w) => w.id !== id);
      localStorage.setItem("widgets", JSON.stringify(updated));
      return { widgets: updated };
    }),

  loadWidgets: () => {
    const saved = localStorage.getItem("widgets");
    if (saved) {
      set({ widgets: JSON.parse(saved) });
    }
  },
}));
