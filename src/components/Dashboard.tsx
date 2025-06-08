import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { TooltipItem } from "chart.js";
import type { LearningLogType, Project } from "../types/types";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = ({
  logs,
  setLogs,
  projects,
}: {
  logs: LearningLogType[];
  setLogs: React.Dispatch<React.SetStateAction<LearningLogType[]>>;
  projects: Project[];
}) => {
  const tagCount: { [key: string]: number } = {};
  logs.forEach((log) => {
    log.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  const totalEntries = logs.length;

  // Calculate percentages
  const chartData = {
    labels: Object.keys(tagCount),
    datasets: [
      {
        data: Object.values(tagCount),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#ef4444",
          "#ec4899",
          "#6366f1",
          "#14b8a6",
          "#f97316",
          "#84cc16",
          "#a855f7",
          "#22c55e",
        ],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"doughnut">) {
            const value = tooltipItem.raw as number;
            const total = Object.values(tagCount).reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };
  const [newEntry, setNewEntry] = useState({ text: "", topic: "" });
  const existingTopics = Array.from(new Set(logs.flatMap((log) => log.tags)));

  const handleAddEntry = () => {
    if (!newEntry.text.trim()) return;

    const updatedLogs = [
      ...logs,
      {
        text: newEntry.text,
        tags: [newEntry.topic || "General"],
        createdAt: new Date(),
      },
    ];
    setLogs(updatedLogs);
    setNewEntry({ text: "", topic: "" });
  };

  return (
    <div className="grid grid-cols-10 gap-4 p-6">
      {/* Main Content */}
      <main className="col-span-10 grid grid-cols-2 gap-4">
        {/* Add New Entry Form */}
        {/* Learning Entry Form */}
        <div className="col-span-2 bg-gray-100 shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Add a New Learning Entry</h3>

          {/* Learning Text Input */}
          <input
            type="text"
            value={newEntry.text}
            onChange={(e) => setNewEntry({ ...newEntry, text: e.target.value })}
            placeholder="What did you learn today?"
            className="w-full mt-2 p-2 border rounded-md"
          />

          {/* Topic Selection Dropdown & Custom Entry */}
          <div className="mt-2">
            <label className="block text-gray-600">
              Select or Create a Topic:
            </label>
            <select
              value={newEntry.topic}
              onChange={(e) =>
                setNewEntry({ ...newEntry, topic: e.target.value })
              }
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="">Select a topic...</option>
              {existingTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Or enter a new topic..."
              value={newEntry.topic}
              onChange={(e) =>
                setNewEntry({ ...newEntry, topic: e.target.value })
              }
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleAddEntry}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Entry
          </button>
        </div>

        {/* Learning Recap Section */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Learning Recap</h3>
          <p className="text-gray-600">
            You've logged{" "}
            <span className="text-blue-500 font-bold">{totalEntries}</span>{" "}
            learning entries!
          </p>
          <p className="text-gray-600 mt-2">
            Topics Covered: {logs.map((log) => log.tags.join(", ")).join(", ")}
          </p>
        </div>

        {/* Recent Learning Logs */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Recent Learning Logs</h3>
          {logs.slice(-5).map((log, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2 mb-2"
            >
              {/* Left: Date */}
              <p className="text-gray-500 text-sm w-1/4">
                {new Date(log.createdAt).toLocaleDateString()}
              </p>

              {/* Right: Log Text & Topics */}
              <div className="w-3/4">
                <p className="text-gray-600">{log.text}</p>
                <p className="text-sm text-blue-500 mt-1">
                  Topic: {log.tags.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Insights Donut Chart */}
        <div className=" bg-purple-100 shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Learning Insights</h3>
          <Doughnut data={chartData} options={chartOptions} />
        </div>

        {/* Project Summary */}
        <div className="bg-gray-100 shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Ongoing Projects</h3>
          {projects.length === 0 ? (
            <p className="text-gray-500">No active projects yet.</p>
          ) : (
            projects.map((project) => (
              <p key={project.id} className="text-blue-500">
                {project.name} - {project.status}
              </p>
            ))
          )}
        </div>

        {/* Achievements */}
        <div className="col-span-2 bg-yellow-100 shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Achievements</h3>
          {/* List badges & milestones */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
