export type WidgetType = "stock" | "table" | "chart";

export interface Widget {
  id: string;
  title: string;
  type: string;
}
