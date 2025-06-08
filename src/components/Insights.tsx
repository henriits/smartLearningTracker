import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface LearningLog {
  text: string;
  tags: string[];
}

const Insights = ({ logs }: { logs: LearningLog[] }) => {
  // Aggregate data based on tag frequency
  const tagCount: { [key: string]: number } = {};
  logs.forEach((log) => {
    log.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  const chartData = {
    labels: Object.keys(tagCount),
    datasets: [
      {
        label: "Learning Entries by Tag",
        data: Object.values(tagCount),
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"],
        borderColor: "#ddd",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">Learning Insights</h2>

      {/* Bar Chart */}
      <div className="mt-4">
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Insights;
