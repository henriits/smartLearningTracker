import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LearningLog from "./components/LearningLog";
import ProjectTracker from "./components/ProjectTracker";
import Insights from "./components/Insights";

function App() {
  return (
    <Router>
      <header className="justify-center flex flex-col items-center">
        <h1 className="text-4xl font-bold p-8">Smart Learning Tracker</h1>
        <nav>
          <Link
            className="px-4 py-2 mx-2 rounded-md border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-200"
            to="/"
          >
            Dashboard
          </Link>
          <Link
            className="px-4 py-2 mx-2 rounded-md border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors duration-200"
            to="/learning-log"
          >
            Learning Log
          </Link>
          <Link
            className="px-4 py-2 mx-2 rounded-md border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors duration-200"
            to="/project-tracker"
          >
            Project Tracker
          </Link>
          <Link
            className="px-4 py-2 mx-2 rounded-md border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-colors duration-200"
            to="/insights"
          >
            Insights
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learning-log" element={<LearningLog />} />
        <Route path="/project-tracker" element={<ProjectTracker />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;
