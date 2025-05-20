import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../features/tasks/taskSelectors";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);

  if (tasks.length === 0) return <p className="empty">No tasks to show</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
