import { fetchHandler } from "./fetchHandler";

export const createGoal = async (newGoal) => {
  return await fetchHandler("/api/goals", "POST", newGoal);
};
