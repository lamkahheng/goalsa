import { prisma } from "../db/prisma.js";

export const createGoal = async (newGoal) => {
  return await prisma.goal.create({
    data: {
      title: newGoal.title,
      description: newGoal.description,
    },
  });
};
