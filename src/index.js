import './style.css';
import { addTask, removeTask } from './add-remove.js';
import renderTodoList from './display.js';

document.addEventListener('DOMContentLoaded', () => {
  addTask();
  renderTodoList();
  removeTask();
});

const checkboxes = document.querySelectorAll('.checkbox');

  // Add an event listener to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      // Log the state of the checkbox (checked or unchecked)
      console.log(`Checkbox ${checkbox.id} is checked: ${checkbox.checked}`);
    });
  });