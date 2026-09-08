import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getGoalById } from "../api/goalsApi";

export const GoalPage = () => {
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

  return (
    <>
      <div className="w-xl m-auto py-12">
        <h2 className="text-3xl mb-4">Goal</h2>

        <p className="text-base">{title}</p>

        <p className="text-base">{description}</p>

        <div>
          <Link to={`/goals/edit/${id}`}>
            <button
              type="submit"
              className="btn btn-primary mt-4 cursor-default"
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
