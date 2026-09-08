import { useState, useEffect } from "react";
import { getTaskById } from "../api/tasksApi";
import { errorHandler } from "../errors/errorHandler";

export const Task = ({ taskId, goalId }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (!taskId) return;

    const fetchTask = async () => {
      try {
        const data = await getTaskById({ taskId, goalId });
        setTask(data);
      } catch (error) {
        errorHandler(error);
      }
    };
    fetchTask();
  }, [taskId, goalId]);

  return (
    <>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </>
  );
};
