// add-remove.js
import { renderTodoList } from './display.js';

export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

export const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

console.log(tasks);

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


export function removeTask() {
  const todoListContainer = document.getElementById('todo');
  
  // Remove previous event listener before adding new ones
  todoListContainer.removeEventListener('click', handleTrashIconClick);
  
  // Add event listener using event delegation
  todoListContainer.addEventListener('click', handleTrashIconClick);

  function handleTrashIconClick(event) {
    if (event.target.classList.contains('fa-trash')) {
      const listItem = event.target.closest('.todo-item');
      if (listItem) {
        const taskIndex = parseInt(listItem.id, 10);
        tasks.splice(taskIndex, 1); // Correctly remove the task
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTodoList();
      }
    }
  }
}
