import { useState } from "react";
import { toast } from "react-toastify";
import { errorHandler } from "../errors/errorHandler";

export const CreateGoalPage = ({ createGoal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    if (!title) {
      return toast.error("Please include a title.");
    }

    const newGoal = {
      title: title,
      description: description,
    };

    try {
      await createGoal(newGoal);
      toast.success("Goal successfully created.");
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      <div className="w-2xl m-auto py-12">
        <form onSubmit={submitForm}>
          <h2 className="text-3xl mb-4">Create New Goal</h2>

          <div className="flex flex-col">
            <div className="mb-4">
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full border"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block">Description</label>
              <textarea
                name="description"
                id="description"
                className="w-full border"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <button type="submit" className="bg-cyan-300 w-24 py-2 border">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
