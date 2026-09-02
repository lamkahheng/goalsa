import { AppError } from "../errors/AppError.js";

export const notFound = (req, res, next) => {
  return next(
    new AppError(
      404,
      "ROUTE_NOT_FOUND",
      "The requested resource was not found.",
    ),
  );
};
