import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <header className="justify-center flex flex-col items-center">
        <h1 className="text-4xl font-bold p-8">Smart Learning Tracker</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
