import Image from "next/image";
import DashboardGrid from "../components/DashboardGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-start justify-start py-20 px-16 bg-white dark:bg-black">
        
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Groww Finance Dashboard
        </h1>

        <DashboardGrid />

      </main>
    </div>
  );
}
