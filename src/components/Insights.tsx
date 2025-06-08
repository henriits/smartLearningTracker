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
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface InsightData {
  tag: string;
  entries: number;
}

const Insights = ({ logs }: { logs: InsightData[] }) => {
  const [insights] = useState<InsightData[]>(logs); // Use real logs data

  const data = {
    labels: insights.map((insight) => insight.tag),
    datasets: [
      {
        label: "Learning Entries",
        data: insights.map((insight) => insight.entries),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">Learning Insights</h2>

      {/* Bar Chart */}
      <div className="mt-4">
        <Bar data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Insights;
