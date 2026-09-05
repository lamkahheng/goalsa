import { useState, useEffect } from "react";
import { useParams } from "react-router";
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
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </>
  );
};
