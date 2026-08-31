import express from "express";
import { logger } from "./middleware/logger.js";
import { goalRouter } from "./routes/goalRouter.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const app = express();

app.use(express.json());
app.use(logger);
app.use("/api/goals", goalRouter);
app.use(notFound);
app.use(errorHandler);
