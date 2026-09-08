import { createTask } from "../api/tasksApi";
import { toast } from "react-toastify";
import { errorHandler } from "../errors/errorHandler";
import { useState } from "react";

export const CreateTaskModal = ({ goalId, onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onCreateClick = async (goalId) => {
    if (!title) {
      return toast.error("Please include a title.");
    }

    const newTask = {
      title: title,
      description: description,
      goalId: goalId,
    };

    try {
      await createTask(newTask);
      toast.success("Task successfully created.");

      if (onTaskCreated) {
        onTaskCreated();
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary mt-4 cursor-default ml-4"
        onClick={() => document.getElementById("create_task_modal").showModal()}
      >
        Create Task
      </button>
      <dialog id="create_task_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Task</h3>
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
              className="input border-base-content w-md"
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
              className="textarea border-base-content w-md"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </fieldset>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-primary mt-4 cursor-default"
                onClick={() => onCreateClick(goalId)}
              >
                Create
              </button>
              <button className="btn mt-4 cursor-default ml-4">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
