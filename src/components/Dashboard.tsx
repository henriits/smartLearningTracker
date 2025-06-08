const Dashboard = ({ logs, projects }: { logs: any[]; projects: any[] }) => {
  return (
    <div className="grid grid-cols-10 gap-4 p-6">
      {/* Main Content */}
      <main className="col-span-10 grid grid-cols-2 gap-4">
        {/* Recent Learning Logs */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Recent Learning Logs</h3>
          {logs.slice(0, 3).map((log, index) => (
            <p key={index} className="text-gray-600">
              {log.text}
            </p>
          ))}
        </div>

        {/* Project Summary */}
        <div className="bg-gray-100 shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Ongoing Projects</h3>
          {projects.map((project) => (
            <p key={project.id} className="text-blue-500">
              {project.name} - {project.status}
            </p>
          ))}
        </div>

        {/* Learning Insights */}
        <div className="col-span-2 bg-purple-100 shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold">Insights</h3>
          {/* Add data visualization */}
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
