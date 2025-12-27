import { create } from "zustand";

interface Widget {
  id: string;
  title: string;
  type: string;
  apiUrl: string;
  refreshInterval: number;
}

interface DashboardStore {
  widgets: Widget[];
  addWidget: (widget: Widget) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  widgets: [],
  addWidget: (widget) =>
    set((state) => ({
      widgets: [...state.widgets, widget],
    })),
}));
