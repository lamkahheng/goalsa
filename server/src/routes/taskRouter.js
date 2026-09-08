import express from "express";
import {
  createTaskHandler,
  getTasksHandler,
  getTaskByIdHandler,
  // updateGoalHandler,
  // deleteGoalHandler,
} from "../controllers/taskController.js";

export const taskRouter = express.Router();

// Create task
taskRouter.post("/", createTaskHandler);

// Get all tasks
taskRouter.get("/", getTasksHandler);

// Get task by id
taskRouter.get("/:id", getTaskByIdHandler);

// // Update goal
// taskRouter.put("/:id", updateGoalHandler);

// // Delete goal
// taskRouter.delete("/:id", deleteGoalHandler);
