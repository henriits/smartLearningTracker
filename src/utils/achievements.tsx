import type { LearningLogType, Project } from "../types/types";
import { hasStreak } from "../utils/hasStreak";

export const getAchievements = (
  logs: LearningLogType[],
  projects: Project[]
) => {
  const topicCount = new Set(logs.flatMap((log) => log.tags)).size;
  const completedProjects = projects.filter((p) => p.status === "Completed");
  const tagCount = logs.reduce((acc: Record<string, number>, log) => {
    log.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

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
    {
      id: 5,
      title: "Streak Starter",
      description: "Logged entries 3 days in a row.",
      unlocked: hasStreak(logs, 3),
    },
    {
      id: 6,
      title: "One Week Warrior",
      description: "Logged entries for 7 consecutive days.",
      unlocked: hasStreak(logs, 7),
    },
    {
      id: 7,
      title: "Tag Lover",
      description: "Added 3 or more tags in a single entry.",
      unlocked: logs.some((log) => log.tags.length >= 3),
    },
    {
      id: 8,
      title: "Learning Centurion",
      description: "Logged 100 learning entries.",
      unlocked: logs.length >= 100,
    },
    {
      id: 9,
      title: "Power Projector",
      description: "Created 5 or more projects.",
      unlocked: projects.length >= 5,
    },
    {
      id: 10,
      title: "Multi-Finisher",
      description: "Completed 3 projects.",
      unlocked: completedProjects.length >= 3,
    },
    {
      id: 11,
      title: "Night Owl",
      description: "Logged an entry after 10 PM.",
      unlocked: logs.some((log) => new Date(log.createdAt).getHours() >= 22),
    },
    {
      id: 12,
      title: "Early Bird",
      description: "Logged an entry before 7 AM.",
      unlocked: logs.some((log) => new Date(log.createdAt).getHours() <= 7),
    },
    {
      id: 13,
      title: "First Project",
      description: "Created your first project.",
      unlocked: projects.length >= 1,
    },
    {
      id: 14,
      title: "Road to Mastery",
      description: "Logged 10 entries under a single topic.",
      unlocked: Object.values(tagCount).some((count) => count >= 10),
    },
  ];
};
