import type { LearningLogType, Project } from "../types/types";

export const getAchievements = (
  logs: LearningLogType[],
  projects: Project[]
) => {
  const topicCount = new Set(logs.flatMap((log) => log.tags)).size;
  const completedProjects = projects.filter((p) => p.status === "Completed");

  return [
    {
      id: 1,
      title: "First Log",
      description: "You added your first learning entry!",
      unlocked: logs.length >= 1,
    },
    {
      id: 2,
      title: "Consistent Learner",
      description: "Logged at least 10 learning entries.",
      unlocked: logs.length >= 10,
    },
    {
      id: 3,
      title: "Topic Explorer",
      description: "Added logs under 5 different topics.",
      unlocked: topicCount >= 5,
    },
    {
      id: 4,
      title: "Project Finisher",
      description: "Marked at least one project as completed.",
      unlocked: completedProjects.length > 0,
    },
  ];
};
