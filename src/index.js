// index.js

import './style.css';
import { addTask, removeTask, loadTasks } from './modules/add-remove.js';
import { renderTodoList } from './modules/display.js';


document.addEventListener('DOMContentLoaded', () => {
  renderTodoList();
  addTask();
  removeTask();
});