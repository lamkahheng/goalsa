import { Goal } from "../components/Goal";
import { getAllGoals } from "../api/goalsApi";
import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router";
import { errorHandler } from "../errors/errorHandler";

export const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await getAllGoals();
        setGoals(data);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGoals();
  }, []);

  return (
    <>
      <h2 className="text-4xl p-4 pl-10">All Goals</h2>

      <Link to={"/goals/new"} className="cursor-default">
        <button className="btn btn-primary mt-4 cursor-default m-6">
          Create New Goal
        </button>
      </Link>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-3 gap-4 bg-amber-50 p-8">
          {goals.map((goal) => (
            <Goal key={goal.id} goal={goal} />
          ))}
        </div>
      )}
    </>
  );
};
