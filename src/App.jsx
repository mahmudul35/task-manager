import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { selectFilter } from "./features/tasks/taskSelectors";
import { setFilter } from "./features/tasks/taskSlice";
import { saveTasksToStorage } from "./utils/localStorageHelpers";

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const tasks = useSelector((state) => state.tasks.list);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>
      <TaskInput />

      <div className="filters">
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className={filter === f ? "active" : ""}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <TaskList />
    </div>
  );
}

export default App;
