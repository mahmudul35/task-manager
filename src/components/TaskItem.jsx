import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteTask, toggleTask } from "../features/tasks/taskSlice";
const TaskItem = ({ task }) => {
  {
    const dispatch = useDispatch();

    const handleDelete = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteTask(task.id));
          Swal.fire("Deleted!", "Your task has been deleted.", "success");
        }
      });
    };

    return (
      <li className={`task-item ${task.completed ? "completed" : ""}`}>
        <span onClick={() => dispatch(toggleTask(task.id))}>{task.title}</span>

        <div style={{ display: "flex", marginLeft: "5px" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />

          <button onClick={handleDelete}>
            <Trash2 size={16} style={{ color: "red", fontWeight: "bold" }} />
          </button>
        </div>
      </li>
    );
  }
};
export default TaskItem;
