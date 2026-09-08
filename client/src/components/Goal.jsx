import { Link } from "react-router";

export const Goal = ({ goal }) => {
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{goal.title}</h2>
        <p>{goal.description}</p>
        <div className="justify-end card-actions">
          <Link to={`/goals/${goal.id}`}>
            <button className="btn btn-primary cursor-default">Track</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
