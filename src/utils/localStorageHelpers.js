export const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasksFromStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};
