export interface Project {
  id: number;
  name: string;
  description: string;
  status: "In Progress" | "Completed" | "On Hold";
  tags: string[];
}

export type ProjectStatus = "In Progress" | "Completed" | "On Hold";

export interface LearningLog {
  text: string;
  tags: string[];
}
