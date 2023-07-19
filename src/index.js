import './style.css';

const tasks = [
  {description: 'Wash dishes', completed: true, id: 1},
  {description: 'Do laundry', completed: false, id: 2},
  {description: 'Take out trash', completed: false, id: 3},
  {description: 'Make dinner', completed: false, id: 4},
];

const todoListContainer = document.getElementById('todo');

function renderTodoList() {
  todoListContainer.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('div');
    listItem.className = 'todo-item';
    listItem.innerHTML = `
      <span class="description">${task.description}</span>
      <span class="completed">${task.completed ? 'Completed' : 'Incomplete'}</span>
    `;
    todoListContainer.appendChild(listItem);
  });
}

renderTodoList();
