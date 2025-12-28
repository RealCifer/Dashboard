import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Widget {
  id: string;
  type: string;
  title: string;
  symbol: string;
}

interface DashboardStore {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
  removeWidget: (id: string) => void;
  setWidgets: (widgets: Widget[]) => void;
}

export const useDashboardStore = create<DashboardStore>()(
  persist(
    (set) => ({
      widgets: [],

      addWidget: (widget) =>
        set((state) => ({
          widgets: [...state.widgets, widget],
        })),

      removeWidget: (id) =>
        set((state) => ({
          widgets: state.widgets.filter((w) => w.id !== id),
        })),

      setWidgets: (widgets) => set({ widgets }),
    }),
    {
      name: "dashboard-storage", // localStorage key
    }
  )
);
