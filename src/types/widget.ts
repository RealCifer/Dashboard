export type WidgetType = "stock" | "chart";

export interface Widget {
  id: string;
  title: string;
  type: string;
}
