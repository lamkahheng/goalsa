import { AppError } from "../errors/AppError.js";
import {
  createTask,
  findAllTasks,
  findTaskById,
  updateTask,
  deleteTask,
} from "../repositories/taskRepository.js";
import { findGoalById } from "../repositories/goalRepository.js";

export const createTaskHandler = async (req, res, next) => {
  const newTask = {
    title: req.body.title,
    description: req.body.description,
    goalId: req.body.goalId,
  };

  if (!newTask.title) {
    return next(new AppError(400, "TITLE_REQUIRED", "Please include a title."));
  }

  if (!newTask.goalId) {
    return next(
      new AppError(
        400,
        "MISSING_PARENT_GOAL",
        "Task needs to be created under a parent Goal.",
      ),
    );
  }

  try {
    const createdTask = await createTask(newTask);
    res.status(201).json(createdTask);
  } catch (error) {
    return next(error);
  }
};

export const getTasksHandler = async (req, res, next) => {
  const goalId = req.query.goalId;

  try {
    const goal = await findGoalById(goalId);

    if (!goal) {
      return next(
        new AppError(
          404,
          "PARENT_GOAL_NOT_FOUND",
          "The parent goal of task requested was not found.",
        ),
      );
    }
  } catch (error) {
    return next(error);
  }

  try {
    const tasks = await findAllTasks(goalId);
    res.status(200).json(tasks);
  } catch (error) {
    return next(error);
  }
};

export const getTaskByIdHandler = async (req, res, next) => {
  const taskId = req.params.id;
  const goalId = req.query.goalId;

  try {
    const task = await findTaskById(taskId, goalId);

    if (!task) {
      return next(
        new AppError(
          404,
          "TASK_NOT_FOUND",
          "The requested task was not found.",
        ),
      );
    }

    res.status(200).json(task);
  } catch (error) {
    return next(error);
  }
};

export const updateTaskHandler = async (req, res, next) => {
  const editedTask = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    goalId: req.body.goalId,
  };

  if (!editedTask.title) {
    return next(new AppError(400, "TITLE_REQUIRED", "Please include a title."));
  }

  try {
    const task = await findTaskById(editedTask.id, editedTask.goalId);

    if (!task) {
      return next(
        new AppError(
          404,
          "TASK_NOT_FOUND",
          "The requested task was not found.",
        ),
      );
    }
  } catch (error) {
    return next(error);
  }

  try {
    const updatedTask = await updateTask(editedTask);
    res.status(200).json(updatedTask);
  } catch (error) {
    return next(error);
  }
};

export const deleteTaskHandler = async (req, res, next) => {
  const taskId = req.params.id;
  const goalId = req.query.goalId;

  try {
    const task = await findTaskById(taskId, goalId);

    if (!task) {
      return next(
        new AppError(
          404,
          "TASK_NOT_FOUND",
          "The requested task was not found.",
        ),
      );
    }
  } catch (error) {
    return next(error);
  }

  try {
    const deletedTask = await deleteTask(taskId, goalId);
    res.status(200).json(deletedTask);
  } catch (error) {
    return next(error);
  }
};
