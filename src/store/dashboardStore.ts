import { create } from "zustand";

export type Widget = {
  id: string;
  type: string;
  title: string;
  symbol: string;
};

type DashboardStore = {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
  removeWidget: (id: string) => void;
  setWidgets: (widgets: Widget[]) => void;
};

const STORAGE_KEY = "groww-dashboard";

export const useDashboardStore = create<DashboardStore>((set) => ({
  widgets:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
      : [],

  addWidget: (widget) =>
    set((state) => {
      const updated = [...state.widgets, widget];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return { widgets: updated };
    }),

  removeWidget: (id) =>
    set((state) => {
      const updated = state.widgets.filter((w) => w.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return { widgets: updated };
    }),

  setWidgets: (widgets) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(widgets));
    return { widgets };
  },
}));
