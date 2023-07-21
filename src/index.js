import './style.css';
import arrow from './assets/arrow.svg';
import { addTask } from './add-remove.js';
import { renderTodoList } from './display.js';

// create Class of task 
export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

// Tasks array
export const tasks = [];

// Add to local storage
localStorage.setItem('tasks', JSON.stringify(tasks));

addTask();
renderTodoList();



