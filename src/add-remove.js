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
    renderTodoList();
    formInputValue.value = '';
  });
}

export function removeTask() {
  const todoListContainer = document.getElementById('todo');
  todoListContainer.addEventListener('click', (event) => {
    if (event.target.className === 'todo-item') {
      const index = event.target.id;
      tasks.splice(index - 1, 1);
      renderTodoList();
    }
  });
}

