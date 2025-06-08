import { useState } from "react";

interface InsightData {
  tag: string;
  entries: number;
}

const Insights = () => {
  const [insights, setInsights] = useState<InsightData[]>([
    { tag: "React", entries: 10 },
    { tag: "TypeScript", entries: 8 },
    { tag: "UI/UX", entries: 6 },
  ]);

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">Learning Insights</h2>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-600">
          Most Studied Topics
        </h3>
        <ul className="mt-2">
          {insights.map((insight) => (
            <li key={insight.tag} className="text-blue-500">
              {insight.tag}: {insight.entries} entries
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Insights;
