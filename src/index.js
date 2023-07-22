import './style.css';
import arrow from './assets/arrow.svg';
import { addTask, removeTask } from './add-remove.js';
import { renderTodoList } from './display.js';

document.addEventListener('DOMContentLoaded', () => {
  addTask();
  renderTodoList();
  removeTask();
});




