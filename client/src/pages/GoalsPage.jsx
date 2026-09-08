import { Goal } from "../components/Goal";
import { getAllGoals } from "../api/goalsApi";
import { useState, useEffect } from "react";

export const GoalsPage = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const data = await getAllGoals();
      setGoals(data);
    };
    fetchGoals();
  }, []);

  return (
    <>
      <h2 className="text-4xl p-4 pl-10">All Goals</h2>
      <div className="grid grid-cols-3 gap-4 bg-amber-50 p-8">
        {goals.map((goal) => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </div>
    </>
  );
};
