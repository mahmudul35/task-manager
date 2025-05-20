import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  getTasksFromStorage,
  saveTasksToStorage,
} from "../../utils/localStorageHelpers";

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
      saveTasksToStorage(state.list);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
