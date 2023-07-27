import { remove } from "lodash";

// add-remove.js
export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

export function addTask(inputValue, tasks) {
  if (inputValue === '') {
    return tasks;
  }
  const newTask = new Task(false, inputValue, tasks.length + 1);
  tasks.push(newTask);
  return tasks;
}

export function removeTask(index) {
  remove(Task.tasks, (task) => task.index === index);
}