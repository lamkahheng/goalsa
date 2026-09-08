import { prisma } from "../db/prisma.js";

export const createTask = async (newTask) => {
  return await prisma.task.create({
    data: {
      title: newTask.title,
      description: newTask.description,
      goalId: newTask.goalId,
    },
  });
};

export const findAllTasks = async (goalId) => {
  return await prisma.task.findMany({
    where: {
      goalId: goalId,
    },
  });
};

export const findTaskById = async (taskId, goalId) => {
  return await prisma.task.findUnique({
    where: { id: taskId, goalId: goalId },
  });
};

// export const updateGoal = async (editedGoal) => {
//   return await prisma.goal.update({
//     where: { id: editedGoal.id },
//     data: { title: editedGoal.title, description: editedGoal.description },
//   });
// };

// export const deleteGoal = async (goalId) => {
//   return await prisma.goal.delete({
//     where: {
//       id: goalId,
//     },
//   });
// };
