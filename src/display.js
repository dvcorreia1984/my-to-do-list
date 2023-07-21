// display.js
import { Task, tasks } from './index.js';
import arrow from './assets/arrow.svg';

const wrapper = document.getElementById('wrapper');
const todoHeading = document.createElement('div');
todoHeading.id = 'todoHeading';
document.getElementById('wrapper').appendChild(todoHeading);

const todoHeadingH2 = document.createElement('h2');
todoHeadingH2.innerHTML = "Today's To Do";
document.getElementById('todoHeading').appendChild(todoHeadingH2);

const todoHeadingIcon = document.createElement('i');
todoHeadingIcon.className = 'fas fa-sync-alt';
document.getElementById('todoHeading').appendChild(todoHeadingIcon);

const formContainer = document.createElement('div');
formContainer.id = 'form-container';
document.getElementById('wrapper').appendChild(formContainer);

const form = document.createElement('form');
form.id = 'form';
document.getElementById('form-container').appendChild(form);

const formInput = document.createElement('input');
formInput.id = 'formInput';
formInput.type = 'text';
formInput.placeholder = 'Add to your list...';
formInput.value = '';
document.getElementById('form').appendChild(formInput);

const formButton = document.createElement('button');
formButton.id = 'formButton';
formButton.type = 'submit';
document.getElementById('form').appendChild(formButton);

const arrowIcon = new Image();
arrowIcon.src = arrow;
document.getElementById('formButton').appendChild(arrowIcon);

const todoList = document.createElement('div');
todoList.id = 'todo';
todoList.className = 'todo';
document.getElementById('wrapper').appendChild(todoList);

const clear = document.createElement('div');
clear.id = 'clear';
clear.innerHTML = 'Clear all completed!';
document.getElementById('wrapper').appendChild(clear);

// Render todo list
export function renderTodoList() {
  const todoListContainer = document.getElementById('todo');
  todoListContainer.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listItem = document.createElement('div');
    listItem.className = 'todo-item';
    listItem.id = task.index;
    listItem.innerHTML = `
      <div class="checkbox"><i class="fa-regular fa-square"></i></div>
      <div class="description">${task.description}</div>
      <div class="elipsis"><i class="fa-solid fa-ellipsis-vertical"></i></div>
    `;
    todoListContainer.appendChild(listItem);
  });
}

