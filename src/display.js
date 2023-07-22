// display.js

// eslint-disable-next-line import/no-cycle
import { tasks } from './add-remove.js';
import arrow from './assets/arrow.svg';

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
  const completedTasks = tasks.filter((task) => task.completed === true);
  completedTasks.forEach((task) => {
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // eslint-disable-next-line no-undef
  renderTodoList();
});
