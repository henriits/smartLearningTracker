export interface Project {
  id: number;
  name: string;
  description: string;
  status: "In Progress" | "Completed" | "On Hold";
  tags: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export type ProjectStatus = "In Progress" | "Completed" | "On Hold";

export interface LearningLogType {
  text: string;
  tags: string[];
  createdAt: Date;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export type CalendarValue = {
  date: string;
  count: number;
};
