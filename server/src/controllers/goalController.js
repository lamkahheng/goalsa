import { AppError } from "../errors/AppError.js";
import {
  createGoal,
  findAllGoals,
  findGoalById,
} from "../repositories/goalRepository.js";

export const createGoalHandler = async (req, res, next) => {
  const newGoal = {
    title: req.body.title,
    description: req.body.description,
  };

  if (!newGoal.title) {
    return next(new AppError(400, "TITLE_REQUIRED", "Please include a title."));
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

export const getGoalByIdHandler = async (req, res, next) => {
  const goalId = req.params.id;

  try {
    const goal = await findGoalById(goalId);

    if (!goal) {
      return next(
        new AppError(
          404,
          "GOAL_NOT_FOUND",
          "The requested goal was not found.",
        ),
      );
    }

    res.status(200).json(goal);
  } catch (error) {
    return next(error);
  }
};
