import { createGoal, findAllGoals } from "../repositories/goalRepository.js";

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
    return next(error);
  }
};

export const getGoalsHandler = async (req, res, next) => {
  try {
    const goals = await findAllGoals();
    res.status(200).json(goals);
  } catch (error) {
    return next(error);
  }
};
