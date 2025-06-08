const LearningLog = ({ logs }: { logs: any[] }) => {
  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">
        All Learning Entries
      </h2>

      {logs.map((log, index) => (
        <div key={index} className="mt-2 p-2 border-b">
          <p className="text-gray-600">{log.text}</p>
          <p className="text-sm text-blue-500">Tags: {log.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default LearningLog;
