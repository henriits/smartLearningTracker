import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LearningLog from "./components/LearningLog";

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
          <Link to="/learning-log">Learning Log</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learning-log" element={<LearningLog />} />
      </Routes>
    </Router>
  );
}

export default App;
