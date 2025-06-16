// utils/hasStreak.ts
import type { LearningLogType } from "../types/types";

export const hasStreak = (
  logs: LearningLogType[],
  targetStreak: number
): boolean => {
  const uniqueDates = Array.from(
    new Set(
      logs
        .map((log) => new Date(log.createdAt).toDateString())
        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    )
  );

  let streak = 1;

  for (let i = 1; i < uniqueDates.length; i++) {
    const prev = new Date(uniqueDates[i - 1]);
    const current = new Date(uniqueDates[i]);

    const diffDays =
      (prev.getTime() - current.getTime()) / (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      streak++;
      if (streak >= targetStreak) return true;
    } else if (diffDays > 1) {
      break;
    }
  }

  return streak >= targetStreak;
};
