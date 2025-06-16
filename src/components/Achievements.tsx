import { getAchievements } from "../utils/achievements";
import type { LearningLogType, Project } from "../types/types";

const Achievements = ({
  logs,
  projects,
}: {
  logs: LearningLogType[];
  projects: Project[];
}) => {
  const achievements = getAchievements(logs, projects);

  return (
    <div className="grid grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`p-4 rounded-lg shadow-md transition ${
            achievement.unlocked
              ? "bg-yellow-200 border-l-4 border-yellow-500"
              : "bg-gray-200 opacity-70"
          }`}
        >
          <h4 className="font-semibold text-lg">
            {achievement.unlocked ? "🏆" : "🔒"} {achievement.title}
          </h4>
          <p className="text-sm text-gray-700 mt-1">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
