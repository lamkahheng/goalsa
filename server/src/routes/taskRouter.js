import express from "express";
import {
  createTaskHandler,
  getTasksHandler,
  getTaskByIdHandler,
  updateTaskHandler,
  // deleteGoalHandler,
} from "../controllers/taskController.js";

export const taskRouter = express.Router();

// Create task
taskRouter.post("/", createTaskHandler);

// Get all tasks
taskRouter.get("/", getTasksHandler);

// Get task by id
taskRouter.get("/:id", getTaskByIdHandler);

// Update task
taskRouter.put("/:id", updateTaskHandler);

// // Delete goal
// taskRouter.delete("/:id", deleteGoalHandler);
