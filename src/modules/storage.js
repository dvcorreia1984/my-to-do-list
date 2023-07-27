function loadTasks() {
  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
} // eslint-disable-next-line import/prefer-default-export
export const tasks = loadTasks();