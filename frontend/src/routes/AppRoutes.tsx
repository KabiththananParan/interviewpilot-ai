import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../features/landing/LandingPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import ResumePage from "../features/resume/ResumePage";
import JobPage from "../features/job/JobPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/job" element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  );
}