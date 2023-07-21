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

console.log(tasks);

export function removeTask() {
  const trashIcon = document.getElementsByClassName('fa-trash');
  for (let i = 0; i < trashIcon.length; i += 1) {
    trashIcon[i].addEventListener('click', () => {
      const listItem = trashIcon[i].closest('.todo-item');
      if (listItem) {
        const taskIndex = listItem.id;
        tasks.splice(taskIndex - 1, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTodoList();
      }
    });
  }
}
