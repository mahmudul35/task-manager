export const selectFilteredTasks = (state) => {
  const { list, filter } = state.tasks;
  if (filter === "completed") return list.filter((t) => t.completed);
  if (filter === "pending") return list.filter((t) => !t.completed);
  return list;
};

export const selectFilter = (state) => state.tasks.filter;
