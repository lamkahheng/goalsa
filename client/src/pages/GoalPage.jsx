import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getGoalById } from "../api/goalsApi";
import { DeleteGoalModal } from "../components/DeleteGoalModal";

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
    </>
  );
};
