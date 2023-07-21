import './style.css';
import arrow from './assets/arrow.svg';
import { addTask } from './add-remove.js';
import { add } from 'lodash';
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
export const tasks = [
  { completed: false, description: 'Add tickbox', index: 4 },
  { completed: false, description: 'Do laundry', index: 2 },
  { completed: false, description: 'Take out trash', index: 3 },
  { completed: false, description: 'Make dinner', index: 1 },
];

addTask();
renderTodoList();
