import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { getTasksFromStorage } from "../../utils/localStorageHelpers";

const initialState = {
  list: getTasksFromStorage(),
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      state.list.unshift(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
