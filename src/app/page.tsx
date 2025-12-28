"use client";

import DashboardGrid from "@/components/DashboardGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Groww Finance Dashboard
      </h1>

      <DashboardGrid />
    </main>
  );
}
