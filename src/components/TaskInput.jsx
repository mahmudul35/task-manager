import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addTask } from "../features/tasks/taskSlice";
const TaskInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //    give sweet alert using sweetalert2 after adding task
    if (text.trim() === "") {
      Swal.fire({
        title: "Error",
        text: "Please enter a task",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    dispatch(addTask(text));
    setText("");
    // show success message
    Swal.fire({
      title: "Task Added",
      text: "Your task has been added successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
