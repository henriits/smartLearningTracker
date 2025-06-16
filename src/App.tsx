import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LearningLog from "./components/LearningLog";
import ProjectTracker from "./components/ProjectTracker";
import Insights from "./components/Insights";

import type { Project, LearningLogType } from "./types/types";
import Achievements from "./components/Achievements";

function App() {
  const [logs, setLogs] = useState<LearningLogType[]>([
    {
      text: "Learned React hooks!",
      tags: ["React"],
      createdAt: new Date("2025-02-04T22:22:22"),
    },
    {
      text: "Explored TypeScript generics.",
      tags: ["TypeScript"],
      createdAt: new Date("2025-02-04T02:21:22"),
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Portfolio Website",
      status: "In Progress",
      description: "Building a personal portfolio site",
      tags: ["React", "TailwindCSS"],
      createdAt: new Date("2025-02-04T09:00:00"),
    },
    {
      id: 2,
      name: "E-Commerce Store",
      status: "Completed",
      description: "Developing an online shopping platform",
      tags: ["Next.js", "Stripe"],
      createdAt: new Date("2025-02-05T10:00:00"),
    },
  ]);

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-gray-800 text-white p-6">
          <h1 className="text-2xl font-bold">Smart Learning Tracker</h1>
          <nav className="mt-6 space-y-4">
            <Link
              className="block py-2 px-4 rounded bg-blue-500 hover:bg-blue-600"
              to="/"
            >
              Dashboard
            </Link>
            <Link
              className="block py-2 px-4 rounded bg-green-500 hover:bg-green-600"
              to="/learning-log"
            >
              Learning Log
            </Link>
            <Link
              className="block py-2 px-4 rounded bg-orange-500 hover:bg-orange-600"
              to="/project-tracker"
            >
              Project Tracker
            </Link>
            <Link
              className="block py-2 px-4 rounded bg-purple-500 hover:bg-purple-600"
              to="/insights"
            >
              Insights
            </Link>
            <Link
              className="block py-2 px-4 rounded bg-yellow-500 hover:bg-yellow-600"
              to="/achievements"
            >
              Achievements
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard logs={logs} setLogs={setLogs} projects={projects} />
              }
            />

            <Route path="/learning-log" element={<LearningLog logs={logs} />} />
            <Route
              path="/project-tracker"
              element={
                <ProjectTracker projects={projects} setProjects={setProjects} />
              }
            />
            <Route path="/insights" element={<Insights logs={logs} />} />
            <Route
              path="/achievements"
              element={<Achievements logs={logs} projects={projects} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
