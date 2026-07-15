import type { ReactNode } from "react";

import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import Sidebar from "../components/layout/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#020617] text-[#dae2fd] font-sans overflow-hidden">

      <Sidebar />

      <main className="ml-64 flex-1 h-screen overflow-y-auto relative custom-scrollbar bg-[#020617]">

        <DashboardHeader />

        <div className="max-w-[1280px] mx-auto px-12 py-8">
          {children}
        </div>

        {/* Ambient Background */}
        <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#adc6ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d0bcff]/5 rounded-full blur-[100px] pointer-events-none" />

      </main>

    </div>
  );
}