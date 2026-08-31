import { createGoal } from "../repositories/goalRepository.js";

export const createGoalHandler = async (req, res, next) => {
  const newGoal = {
    title: req.body.title,
    description: req.body.description,
  };

  if (!newGoal.title) {
    const error = new Error("Please include a title");
    error.status = 400;
    return next(error);
  }

  try {
    const createdGoal = await createGoal(newGoal);
    res.status(201).json(createdGoal);
  } catch (error) {
    next(error);
  }
};
