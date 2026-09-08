import { CreateTaskModal } from "./CreateTaskModal";
import { TaskListings } from "./TaskListings";
import { useState, useEffect, useCallback } from "react";
import { getAllTasks } from "../api/tasksApi";
import { Spinner } from "../components/Spinner";
import { errorHandler } from "../errors/errorHandler";

export const TaskManager = ({ goalId, setTaskId }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = useCallback(async () => {
    try {
      const data = await getAllTasks(goalId);
      setTasks(data);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  }, [goalId]);

  useEffect(() => {
    const wrapper = async () => fetchTasks();
    wrapper();
  }, [fetchTasks]);

  return (
    <>
      <div>
        <CreateTaskModal goalId={goalId} onTaskCreated={fetchTasks} />
      </div>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <TaskListings tasks={tasks} setTaskId={setTaskId} />
      )}
    </>
  );
};
