import _ from 'lodash';
import './style.css';

const tasks = [
  { completed: false, description: 'Add tickbox', index: 4 },
  { completed: false, description: 'Do laundry', index: 2 },
  { completed: false, description: 'Take out trash', index: 3 },
  { completed: false, description: 'Make dinner', index: 1 },
];

const todoListContainer = document.getElementById('todo');

function renderTodoList() {
  todoListContainer.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listItem = document.createElement('div');
    listItem.className = 'todo-item';
    listItem.innerHTML = `
      <div class="checkbox"><i class="fa-regular fa-square"></i></div>
      <div class="description">${task.description}</div>
      <div class="elipsis"><i class="fa-solid fa-ellipsis-vertical"></i></div>
    `;
    todoListContainer.appendChild(listItem);
  });
}
renderTodoList();
