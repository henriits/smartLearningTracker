import { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  status: "In Progress" | "Completed" | "On Hold";
  tags: string[];
}

const ProjectTracker = ({
  projects,
  setProjects,
}: {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}) => {
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const addProject = () => {
    if (!newProject.name.trim()) return;
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        name: newProject.name,
        description: newProject.description,
        status: "In Progress",
        tags: ["React", "UI/UX"], // Default tags
      },
    ]);
    setNewProject({ name: "", description: "" });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">Project Tracker</h2>

      {/* Add Project Form */}
      <div className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Project Name"
          className="p-2 border rounded-md w-full"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
        />
        <textarea
          placeholder="Project Description"
          className="p-2 border rounded-md w-full"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <button
          onClick={addProject}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Project
        </button>
      </div>

      {/* Display Projects */}
      <div className="mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white rounded-md shadow-md mt-2"
          >
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500">Status: {project.status}</p>
            <div className="mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-green-500 text-white rounded-md text-sm mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTracker;
