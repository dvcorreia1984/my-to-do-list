import './style.css';
import arrow from './assets/arrow.svg';
import { addTask, removeTask } from './add-remove.js';
import { renderTodoList } from './display.js';

// create Class of task 
export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

export const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

addTask();
renderTodoList();
removeTask();

