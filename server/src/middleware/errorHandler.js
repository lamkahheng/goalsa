export const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.isOperational) {
    return res.status(error.status).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }

  return res.status(500).json({
    error: {
      code: "INTERNAL_ERROR",
      message: "Something went wrong.",
    },
  });
};
