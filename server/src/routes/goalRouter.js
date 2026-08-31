import express from "express";
import {
  createGoalHandler,
  getGoalsHandler,
  getGoalByIdHandler,
} from "../controllers/goalController.js";

export const goalRouter = express.Router();

// Create goal
goalRouter.post("/", createGoalHandler);

// Read all goals
goalRouter.get("/", getGoalsHandler);

// Real goal by id
goalRouter.get("/:id", getGoalByIdHandler);
