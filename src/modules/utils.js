export function editTaskDescription(index, tasks, newDescription) {
  // if description is empty, return tasks
  if (newDescription === '') {
    return tasks;
  } // if index is not found, return tasks
  if (tasks.findIndex((task) => task.index === index) === -1) {
    return tasks;
  }
  const indexToEdit = tasks.findIndex((task) => task.index === index);
  tasks[indexToEdit].description = newDescription;
  return tasks;
}

export function changeTaskStatus(index, tasks, completed) {
  if (tasks.findIndex((task) => task.index === index) === -1) {
    return tasks;
  }
  if (typeof completed !== 'boolean') {
    return tasks;
  }
  const indexToEdit = tasks.findIndex((task) => task.index === index);
  tasks[indexToEdit].completed = completed;
  return tasks;
}
