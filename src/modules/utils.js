export default function editTaskDescription(index, tasks, newDescription) {
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

// change task status from completed to not completed and vice versa
export function changeTaskStatus(index, tasks) {
  const indexToChange = tasks.findIndex((task) => task.index === index);
  tasks[indexToChange].completed = !tasks[indexToChange].completed;
  return tasks;
}
