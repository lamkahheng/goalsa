import express from "express";
import {
  createGoalHandler,
  getGoalsHandler,
} from "../controllers/goalController.js";

export const goalRouter = express.Router();

// Create goal
goalRouter.post("/", createGoalHandler);

// Read all goals
goalRouter.get("/", getGoalsHandler);
