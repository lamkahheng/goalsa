import express from "express";
import {
  createGoalHandler,
  getGoalsHandler,
  getGoalByIdHandler,
  updateGoalHandler,
  deleteGoalHandler,
} from "../controllers/goalController.js";

export const goalRouter = express.Router();

// Create goal
goalRouter.post("/", createGoalHandler);

// Get all goals
goalRouter.get("/", getGoalsHandler);

// Get goal by id
goalRouter.get("/:id", getGoalByIdHandler);

// Update goal
goalRouter.put("/:id", updateGoalHandler);

// Delete goal
goalRouter.delete("/:id", deleteGoalHandler);
