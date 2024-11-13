let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export const getTasks = () => tasks;

export const addTask = (task) => {
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTask = (id) => tasks[id];

export const updateTask = (id, updatedTask) => {
  tasks[id] = updatedTask;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  tasks = tasks.filter((task, index) => index !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
