import { useState } from "react";

const LearningLog = () => {
  const [log, setLog] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Log Entry:", log);
    setLog("");
  };

  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">
        Add a New Learning Entry
      </h2>
      <textarea
        className="w-full mt-4 p-2 border rounded-md"
        placeholder="What did you learn today?"
      />
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Save Entry
      </button>
    </div>
  );
};

export default LearningLog;
