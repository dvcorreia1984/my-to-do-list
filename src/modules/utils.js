import { update } from "lodash";

export function editTaskDescription(index, tasks, newDescription) {
  if (newDescription === '') {
    return tasks;
  }
  if (tasks.findIndex((task) => task.index === index) === -1) {
    return tasks;
  }
  const indexToEdit = tasks.findIndex((task) => task.index === index);
  tasks[indexToEdit].description = newDescription;
  return tasks;
}

export function changeTaskStatus(index, tasks, completed) {
  // if (tasks.findIndex((task) => task.index === index) === -1) {
  //   return tasks;
  // }
  // if (typeof completed !== 'boolean') {
  //   return tasks;
  // }
  const indexToEdit = tasks.findIndex((task) => task.index === index);
  tasks[indexToEdit].completed = completed;
  return tasks;
}

export function clearCompletedTasks(tasks) {
  const completedTasks = tasks.filter((task) => task.completed === true);
  completedTasks.forEach((task) => {
    const indexToRemove = tasks.findIndex((t) => t.index === task.index);
    tasks.splice(indexToRemove, 1);
  });
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  return tasks;
}
