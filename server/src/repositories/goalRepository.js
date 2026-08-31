import { prisma } from "../db/prisma.js";

export const createGoal = async (newGoal) => {
  return await prisma.goal.create({
    data: {
      title: newGoal.title,
      description: newGoal.description,
    },
  });
};

export const findAllGoals = async () => {
  return await prisma.goal.findMany();
};

export const findGoalById = async (goalId) => {
  return await prisma.goal.findUnique({
    where: { id: goalId },
  });
};
