import { useState, useEffect } from "react";
import { getTaskById } from "../api/tasksApi";
import { errorHandler } from "../errors/errorHandler";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { updateTask } from "../api/tasksApi";

export const Task = ({ taskId, goalId, onTaskUpdated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!taskId) return;

    const fetchTask = async () => {
      try {
        const task = await getTaskById({ taskId, goalId });
        setTitle(task.title);
        setDescription(task.description);
      } catch (error) {
        errorHandler(error);
      }
    };
    fetchTask();
  }, [taskId, goalId]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!title) {
      return toast.error("Please include a title.");
    }

    const editedTask = {
      id: taskId,
      title: title,
      description: description,
      goalId: goalId,
    };

    try {
      await updateTask(editedTask);
      toast.success("Task successfully updated.");
      setEdit(false);
      await onTaskUpdated();
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      <div className="p-8">
        {edit ? (
          <>
            <button onClick={() => setEdit(false)}>
              <Link className="link link-hover cursor-default">Back</Link>
            </button>
            <form onSubmit={submitForm}>
              <h2 className="text-3xl mb-4 mt-2">Update Goal</h2>
              <fieldset className="fieldset">
                <label
                  className="label text-base-content text-base"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="input border-base-content w-xs"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label
                  className="label text-base-content text-base"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="textarea border-base-content w-xs"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <p className="text-base">id: {taskId}</p>
                <p className="text-base">goalId: {goalId}</p>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 cursor-default"
                  >
                    Update
                  </button>
                </div>
              </fieldset>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl mb-4 mt-2">{title}</h2>

            <p className="text-base">{description}</p>
            <div>
              <Link>
                <button
                  onClick={() => setEdit(true)}
                  className="btn btn-primary mt-4 cursor-default"
                >
                  Edit
                </button>
              </Link>

              {/* <DeleteGoalModal /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};
