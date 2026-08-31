import express from "express";
import { createGoalHandler } from "../controllers/goalController.js";

export const goalRouter = express.Router();

// Create goal
goalRouter.post("/", createGoalHandler);
