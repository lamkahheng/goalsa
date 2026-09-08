import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { getGoalById } from "../api/goalsApi";
import { DeleteGoalModal } from "../components/DeleteGoalModal";
import { TaskManager } from "../components/TaskManager";
import { Task } from "../components/Task";
import { errorHandler } from "../errors/errorHandler";
import { getAllTasks } from "../api/tasksApi";
import { Spinner } from "../components/Spinner";

export const GoalPage = () => {
  // useStates and useEffects for current page
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  // fetch goal data for GoalPage
  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const goal = await getGoalById(id);
        setTitle(goal.title);
        setDescription(goal.description);
      } catch (error) {
        errorHandler(error);
      }
    };
    fetchGoal();
  }, [id]);

  // useStates and useCallback for child pages
  // setTaskId for changing the task displayed in Task Componenet (Right side of the page)
  const [taskId, setTaskId] = useState("");

  // tasks state to be passed to child TaskManager
  const [tasks, setTasks] = useState([]);

  // loading state for TaskManager component
  const [loading, setLoading] = useState(true);

  // callback to reload tasks records
  const fetchTasks = useCallback(async () => {
    try {
      const data = await getAllTasks(id);
      setTasks(data);
      setLoading(false);
    } catch (error) {
      errorHandler(error);
    }
  }, [id]);

  // useEffect to load tasks data on page mount (or goal id change)
  useEffect(() => {
    const wrapper = async () => {
      fetchTasks();
    };
    wrapper();
  }, [fetchTasks]);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-3xl">
          <div className="p-8">
            <Link to={"/goals"} className="link link-hover cursor-default">
              Back
            </Link>

            <h2 className="text-3xl mb-4 mt-2">Goal</h2>

            <p className="text-base">{title}</p>

            <p className="text-base">{description}</p>

            <div>
              <Link to={`/goals/edit/${id}`}>
                <button className="btn btn-primary mt-4 cursor-default">
                  Edit
                </button>
              </Link>

              <DeleteGoalModal id={id} />
            </div>
          </div>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <TaskManager
              goalId={id}
              setTaskId={setTaskId}
              tasks={tasks}
              fetchTasks={fetchTasks}
            />
          )}
        </div>

        <Task taskId={taskId} goalId={id} onTaskUpdated={fetchTasks} />
      </div>
    </>
  );
};
