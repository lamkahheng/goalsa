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

export const getGoalByIdHandler = async (req, res, next) => {
  const goalId = req.params.id;

  try {
    const goal = await findGoalById(goalId);

    if (!goal) {
      const error = new Error(`A goal with thr id of ${goalId} was not found`);
      error.status = 404;
      return next(error);
    }

    res.status(200).json(goal);
  } catch (error) {
    return next(error);
  }
};
