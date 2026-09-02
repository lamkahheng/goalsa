import { toast } from "react-toastify";

export const errorHandler = (error) => {
  if (error.isOperational) {
    // todo: check error.code to decide what to do differently here
    toast.error(error.message);
    return;
  }

  console.error(error);
  toast.error("Somthing went wrong. Please try again.");
  return;
};
