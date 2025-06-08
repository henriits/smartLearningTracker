import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LearningLog from "./components/LearningLog";
import ProjectTracker from "./components/ProjectTracker";
import Insights from "./components/Insights";

function App() {
  const [logs, setLogs] = useState<any[]>([
    { text: "Learned React hooks!", tags: ["React"] },
    { text: "Explored TypeScript generics.", tags: ["TypeScript"] },
  ]);

  const [projects, setProjects] = useState<any[]>([
    { id: 1, name: "Portfolio Website", status: "In Progress" },
    { id: 2, name: "E-Commerce Store", status: "Completed" },
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
            <Route path="/project-tracker" element={<ProjectTracker />} />
            <Route path="/insights" element={<Insights logs={logs} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
