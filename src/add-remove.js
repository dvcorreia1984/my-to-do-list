// add-remove.js
import { Task, tasks } from './index.js';
import { renderTodoList } from './display.js';

export function addTask() {
  const formInputValue = document.getElementById('formInput');
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = formInputValue.value.trim();
    if (inputValue === '') {
      return;
    }
    const newTask = new Task(false, inputValue, tasks.length + 1);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTodoList();
    formInputValue.value = '';
  });
}






