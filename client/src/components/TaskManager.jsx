import { CreateTaskModal } from "./CreateTaskModal";
import { TaskListings } from "./TaskListings";

export const TaskManager = ({ goalId, setTaskId, tasks, fetchTasks }) => {
  return (
    <>
      <div>
        <CreateTaskModal goalId={goalId} onTaskCreated={fetchTasks} />
      </div>

      <TaskListings tasks={tasks} setTaskId={setTaskId} />
    </>
  );
};
