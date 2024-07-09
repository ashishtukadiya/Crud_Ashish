let tasks = [];

export const getTasks = () => tasks;

export const addTask = (task) => {
  tasks.push(task);
};

export const getTask = (id) => tasks[id];

export const updateTask = (id, updatedTask) => {
  tasks[id] = updatedTask;
};

export const deleteTask = (id) => {
  tasks = tasks.filter((task, index) => index !== id);
};
