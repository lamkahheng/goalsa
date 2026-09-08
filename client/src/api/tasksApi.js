import { apiRequest } from "./apiRequest";

export const createTask = async (newTask) => {
  return await apiRequest({
    url: "/api/tasks",
    method: "POST",
    body: newTask,
  });
};

export const getAllTasks = async (goalId) => {
  return await apiRequest({
    url: `/api/tasks?goalId=${goalId}`,
    method: "GET",
  });
};

export const getTaskById = async ({ taskId, goalId }) => {
  return await apiRequest({
    url: `/api/tasks/${taskId}?goalId=${goalId}`,
    method: "GET",
  });
};

export const updateTask = async (editedTask) => {
  return await apiRequest({
    url: `/api/tasks/${editedTask.id}`,
    method: "PUT",
    body: editedTask,
  });
};

// export const deleteGoal = async (id) => {
//   return await apiRequest({
//     url: `/api/goals/${id}`,
//     method: "DELETE",
//   });
// };
