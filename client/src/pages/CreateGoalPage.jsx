import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { errorHandler } from "../errors/errorHandler";

export const CreateGoalPage = ({ createGoal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

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
      const createdGoal = await createGoal(newGoal);
      toast.success("Goal successfully created.");
      navigate(`/goals/${createdGoal.id}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      <div className="w-xl m-auto py-12">
        <form onSubmit={submitForm}>
          <h2 className="text-3xl mb-4">Create New Goal</h2>

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
              className="input border-base-content"
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
              className="textarea border-base-content"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div>
              <button
                type="submit"
                className="btn btn-primary mt-4 cursor-default"
              >
                Create
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
