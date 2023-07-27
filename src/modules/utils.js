import { tasks } from './storage.js';
import { renderTodoList } from './display.js';

export function handleTaskDescriptionEdit(event) {
  const descriptionElement = event.target;
  if (descriptionElement.classList.contains('description')) {
    const listItem = descriptionElement.closest('.todo-item');
    if (listItem) {
      const taskIndex = parseInt(listItem.id, 10);
      const newDescription = descriptionElement.textContent;

      tasks[taskIndex].description = newDescription;
    }
  }
}

export function listenForEdit() {
  const todoListContainer = document.getElementById('todo');
  todoListContainer.addEventListener('input', handleTaskDescriptionEdit);
}

export function editTask(index, newDescription) {
  tasks[index].description = newDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTodoList();
}