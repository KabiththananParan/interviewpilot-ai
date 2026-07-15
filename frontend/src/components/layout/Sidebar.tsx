import {
  LayoutDashboard,
  FileText,
  BarChart3,
  GitMerge,
  Mic,
  Route,
  Brain,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: FileText,
  },
  {
    name: "Job Analysis",
    path: "/job",
    icon: BarChart3,
  },
  {
    name: "Match Analysis",
    path: "/match",
    icon: GitMerge,
  },
  {
    name: "Mock Interview",
    path: "/interview",
    icon: Mic,
  },
  {
    name: "Roadmap",
    path: "/roadmap",
    icon: Route,
  },
  {
    name: "Career Coach",
    path: "/career",
    icon: Brain,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#171f33]/80 backdrop-blur-xl border-r border-white/10 shadow-2xl flex flex-col z-50">

      {/* Logo */}

      <div className="px-6 py-8 flex items-center gap-3">

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4d8eff] to-[#7b61ff] flex items-center justify-center font-bold text-white">
          IP
        </div>

        <div>
          <h1 className="text-lg font-bold text-[#adc6ff]">
            InterviewPilot AI
          </h1>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c2c6d6]">
            Elite Career Coach
          </p>
        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-3 space-y-2">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-[#adc6ff]/10 text-[#adc6ff] border-r-2 border-[#adc6ff] font-semibold"
                    : "text-[#c2c6d6] hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon className="w-5 h-5" />

              <span className="text-sm">{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[#4d8eff] flex items-center justify-center text-[#001d42] font-bold">
            K
          </div>

          <div className="flex-1 overflow-hidden">

            <p className="text-sm font-semibold truncate">
              Kabiththanan
            </p>

            <p className="text-xs text-[#94a3b8]">
              Pro Tier
            </p>

          </div>

          <button className="text-[#94a3b8] hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>

        </div>

      </div>

    </aside>
  );
}