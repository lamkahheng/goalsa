import { AppError } from "../errors/AppError.js";
import {
  createTask,
  findAllTasks,
  findTaskById,
  // updateGoal,
  // deleteGoal,
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

// export const updateGoalHandler = async (req, res, next) => {
//   const editedGoal = {
//     id: req.body.id,
//     title: req.body.title,
//     description: req.body.description,
//   };

//   try {
//     const goal = await findGoalById(editedGoal.id);

//     if (!goal) {
//       return next(
//         new AppError(
//           404,
//           "GOAL_NOT_FOUND",
//           "The requested goal was not found.",
//         ),
//       );
//     }
//   } catch (error) {
//     return next(error);
//   }

//   if (!editedGoal.title) {
//     return next(new AppError(400, "TITLE_REQUIRED", "Please include a title."));
//   }

//   try {
//     const updatedGoal = await updateGoal(editedGoal);
//     res.status(200).json(updatedGoal);
//   } catch (error) {
//     return next(error);
//   }
// };

// export const deleteGoalHandler = async (req, res, next) => {
//   const goalId = req.params.id;

//   try {
//     const goal = await findGoalById(goalId);

//     if (!goal) {
//       return next(
//         new AppError(
//           404,
//           "GOAL_NOT_FOUND",
//           "The requested goal was not found.",
//         ),
//       );
//     }
//   } catch (error) {
//     return next(error);
//   }

//   try {
//     const deletedGoal = await deleteGoal(goalId);
//     res.status(200).json(deletedGoal);
//   } catch (error) {
//     return next(error);
//   }
// };
