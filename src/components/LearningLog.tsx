import { useState } from "react";

const LearningLog = () => {
  const [log, setLog] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Log Entry:", log);
    setLog("");
  };

  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">
        Add a New Learning Entry
      </h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={log}
          onChange={(e) => setLog(e.target.value)}
          placeholder="What did you learn today?"
          className="w-full mt-4 p-2 border rounded-md"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default LearningLog;
