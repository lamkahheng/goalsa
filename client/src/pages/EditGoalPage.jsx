import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getGoalById, updateGoal } from "../api/goalsApi";
import { toast } from "react-toastify";
import { errorHandler } from "../errors/errorHandler";

export const EditGoalPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchGoal = async () => {
      const goal = await getGoalById(id);
      setTitle(goal.title);
      setDescription(goal.description);
    };
    fetchGoal();
  }, [id]);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    if (!title) {
      return toast.error("Please include a title.");
    }

    const editedGoal = {
      id: id,
      title: title,
      description: description,
    };

    try {
      const updatedGoal = await updateGoal(editedGoal);
      toast.success("Goal successfully updated.");
      navigate(`/goals/${updatedGoal.id}`);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      <div className="w-xl m-auto py-12">
        <Link to={`/goals/${id}`} className="link link-hover cursor-default">
          Back
        </Link>
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
                Update
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
