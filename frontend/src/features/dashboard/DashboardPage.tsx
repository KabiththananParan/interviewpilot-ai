import { ArrowRight, Brain } from "lucide-react";

import AppLayout from "../../layouts/AppLayout";

import StatisticsCards from "./components/StatisticsCards";
import QuickActions from "./components/QuickActions";
import ProgressOverview from "./components/ProgressOverview";
import RecentActivity from "./components/RecentActivity";

export default function DashboardPage() {
  return (
    <AppLayout>
      {/* Greeting */}
      <section className="animate-fade-up mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#dae2fd]">
          Good Morning, Kabiththanan 👋
        </h1>

        <p className="mt-2 text-base font-medium text-[#c2c6d6]">
          Let's prepare for your next interview. You're in the top 5% of
          candidates this week.
        </p>
      </section>

      {/* Statistics */}
      <StatisticsCards />

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Left Side */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <QuickActions />

          <ProgressOverview />
        </div>

        {/* Right Side */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* AI Recommendation */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#adc6ff]/20 via-transparent to-[#d0bcff]/20">
            <div className="rounded-2xl bg-[#171f33]/90 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-[#adc6ff]/20 p-2 text-[#adc6ff]">
                  <Brain className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold">
                  AI Recommendation
                </h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-[#c2c6d6]">
                Focus on{" "}
                <span className="font-semibold text-[#adc6ff]">
                  PostgreSQL
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#adc6ff]">
                  Kubernetes
                </span>{" "}
                this week.

                <br />
                <br />

                Your FastAPI skills are strong.

                Practice behavioral interviews before applying.
              </p>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#adc6ff] py-3 text-sm font-extrabold text-[#002e6a] transition-all hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] active:scale-[0.98]">
                Continue Learning

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <RecentActivity />
        </div>
      </div>
    </AppLayout>
  );
}