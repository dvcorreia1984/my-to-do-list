// display.js
import { tasks } from './storage.js';
import { addTask, removeTask } from './add-remove.js';
import { editTaskDescription, changeTaskStatus, clearCompletedTasks } from './utils.js';

// Render todo list
export function renderTodoList() {
  const todoListContainer = document.getElementById('todo');
  todoListContainer.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => { // Update id when rendering the todo list
    const listItem = document.createElement('div');
    listItem.className = 'todo-item';
    listItem.innerHTML = `
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox_${task.index}" class="checkbox">
      </div>
      <div class="description">
        <div><input class="taskInput" type="text" maxlength="30" value="${task.description}"></div>
      </div>
      <div id="delete" class="delete">
        <i id="trash" class="fa fa-trash" aria-hidden="true"></i>
      </div>
      <div class="elipsis">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;
    todoListContainer.appendChild(listItem);

    // Add event listener to trash icon
    const trashIcon = listItem.querySelector('#trash');
    trashIcon.addEventListener('click', () => {
      removeTask(task.index, tasks);
      trashIcon.closest('.todo-item').remove();
    });

    // Add event listener to each checkbox when rendering
    const checkbox = listItem.querySelector(`#checkbox_${task.index}`);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked === true) {
        // change style of description to line-through
        const description = listItem.querySelector('.taskInput');
        description.style.textDecoration = 'line-through';
        description.style.color = 'orange';
        task.completed = true;
        changeTaskStatus(task.index, tasks, task.completed);
      } else {
        // change style of description to normal
        const description = listItem.querySelector('.taskInput');
        description.style.textDecoration = 'none';
        description.style.color = '#90e0ef';
        task.completed = false;
        changeTaskStatus(task.index, tasks, task.completed);
      }
    });

    // Add event listener to each task input for editing
    const taskInput = listItem.querySelector('.taskInput');
    taskInput.addEventListener('change', () => {
      if (taskInput.value !== '') {
        task.description = taskInput.value;
        editTaskDescription(task.index, tasks, taskInput.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        taskInput.value = task.description;
      }
    });

    // add keypress event listener to task input
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        taskInput.blur();
      }
    });
  });
}

export function handleFormSubmit(event) {
  event.preventDefault();
  const formInputValue = document.getElementById('formInput').value.trim();
  // const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  addTask(formInputValue, tasks);
  document.getElementById('formInput').value = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTodoList();
}

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
form.addEventListener('submit', handleFormSubmit);
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

// add plus fa icon to button
const plusIcon = document.createElement('i');
plusIcon.className = 'fas fa-plus';
document.getElementById('formButton').appendChild(plusIcon);

const todoList = document.createElement('form');
todoList.id = 'todo';
todoList.className = 'todo';
document.getElementById('wrapper').appendChild(todoList);

const clear = document.createElement('button');
clear.id = 'clear';
clear.innerHTML = 'Clear all completed!';
document.getElementById('wrapper').appendChild(clear);

const clearAll = document.getElementById('clear');
clearAll.addEventListener('click', () => {
  clearCompletedTasks(tasks);
  renderTodoList();
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
