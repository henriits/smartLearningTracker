import { useState } from "react";
import type { Project, ProjectStatus } from "../types/types";

const ProjectTracker = ({
  projects,
  setProjects,
}: {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}) => {
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const addProject = () => {
    if (!newProject.name.trim()) return;

    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: prevProjects.length + 1,
        name: newProject.name,
        description: newProject.description,
        status: "In Progress",
        tags: ["React", "UI/UX"],
      },
    ]);

    setNewProject({ name: "", description: "" });
  };

  const updateProjectStatus = (id: number, newStatus: ProjectStatus) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, status: newStatus } : project
      )
    );
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
      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white rounded-md shadow-md mt-2"
          >
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <select
              value={project.status}
              onChange={(e) =>
                updateProjectStatus(project.id, e.target.value as ProjectStatus)
              }
              className="mt-2 p-2 border rounded-md"
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTracker;
