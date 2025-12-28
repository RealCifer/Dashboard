import DashboardGrid from "@/components/DashboardGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Groww Finance Dashboard</h1>
        <p className="text-gray-400 mb-8">
          Monitor financial data using customizable widgets
        </p>

        <DashboardGrid />
      </div>
    </main>
  );
}
