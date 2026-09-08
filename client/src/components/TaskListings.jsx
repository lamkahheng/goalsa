export const TaskListings = ({ tasks, setTaskId }) => {
  return (
    <>
      <h2 className="text-3xl p-4 pl-10">Tasks</h2>

      <div className="flex flex-col gap-4 p-8">
        {tasks.map((task) => (
          <button
            key={task.id}
            className="hover: cursor-pointer hover:bg-amber-200"
            onClick={() => setTaskId(task.id)}
          >
            <div className="border rounded-sm p-2 border-base-content">
              {task.title}
            </div>
          </button>
        ))}
      </div>
    </>
  );
};
