import { deleteTask } from "../api/tasksApi";
import { toast } from "react-toastify";
import { errorHandler } from "../errors/errorHandler";

export const DeleteTaskModal = ({
  taskId,
  goalId,
  onTaskDeleted,
  setTaskId,
}) => {
  const onDeleteClick = async () => {
    try {
      await deleteTask({ taskId, goalId });
      toast.success("Task successfully deleted.");
      await onTaskDeleted();
      setTaskId("");
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-soft btn-error mt-4 cursor-default ml-4"
        onClick={() => document.getElementById("delete_task_modal").showModal()}
      >
        Delete
      </button>
      <dialog id="delete_task_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Confirmation</h3>
          <p className="py-4">Are you sure you want to delete this task?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-soft btn-error mt-4 cursor-default"
                onClick={() => onDeleteClick()}
              >
                Delete
              </button>
              <button className="btn mt-4 cursor-default ml-4">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
