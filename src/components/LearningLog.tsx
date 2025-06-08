import type { LearningLogType } from "../types/types";

const LearningLog = ({ logs }: { logs: LearningLogType[] }) => {
  return (
    <div className="container mx-auto  p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">
        All Learning Entries
      </h2>

      {logs.map((log, index) => (
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
              Topics: {log.tags.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningLog;
