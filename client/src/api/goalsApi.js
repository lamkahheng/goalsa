import { apiRequest } from "./apiRequest";

export const createGoal = async (newGoal) => {
  return await apiRequest({
    url: "/api/goals",
    method: "POST",
    body: newGoal,
  });
};

export const getGoalById = async (id) => {
  return await apiRequest({
    url: `/api/goals/${id}`,
    method: "GET",
  });
};

export const getAllGoals = async () => {
  return await apiRequest({
    url: "/api/goals",
    method: "GET",
  });
};

export const updateGoal = async (editedGoal) => {
  return await apiRequest({
    url: `/api/goals/${editedGoal.id}`,
    method: "PUT",
    body: editedGoal,
  });
};
