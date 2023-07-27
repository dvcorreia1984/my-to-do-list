// add-remove.js
export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

export function addTask(inputValue, tasks) {
  if (inputValue === '') {
    return tasks;
  }
  const newTask = new Task(false, inputValue, tasks.length + 1);
  tasks.push(newTask);
  return tasks;
}

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

function updateTaskIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function handleTrashIconClick(event) {
  if (event.target.classList.contains('fa-trash')) {
    const listItem = event.target.closest('.todo-item');
    if (listItem) {
      const taskIndex = parseInt(listItem.id, 10);
      tasks.splice(taskIndex - 1, 1);
      updateTaskIndexes(); // Update task indexes after deletion
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTodoList();
    }
  }
}

export function removeTask() {
  const todoListContainer = document.getElementById('todo');

  // Remove previous event listener before adding new ones
  todoListContainer.removeEventListener('click', handleTrashIconClick);

  // Add event listener using event delegation
  todoListContainer.addEventListener('click', handleTrashIconClick);
}

export function editTask(index, newDescription) {
  tasks[index].description = newDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTodoList();
}

export function listenForEdit() {
  const todoListContainer = document.getElementById('todo');
  todoListContainer.addEventListener('input', handleTaskDescriptionEdit);
}
