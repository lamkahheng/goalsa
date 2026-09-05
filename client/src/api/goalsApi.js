import { apiRequest } from "./apiRequest";

export const createGoal = async (newGoal) => {
  return await apiRequest({ url: "/api/goals", method: "POST", body: newGoal });
};

export const getGoalById = async (id) => {
  return await apiRequest({
    url: `/api/goals/${id}`,
    method: "GET",
  });
};
