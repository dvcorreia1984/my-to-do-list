import tasks from './add-remove.js';

export default function addEventListenersAndUpdateTasks() {
  tasks.forEach((task) => {
    const listItem = document.querySelector(`#checkbox_${task.index}`).closest('.todo-item');
    const checkbox = listItem.querySelector(`#checkbox_${task.index}`);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked === true) {
        // change style of description to line-through
        const description = listItem.querySelector('.description');
        description.style.textDecoration = 'line-through';
        description.style.color = '#BDBDBD';
        task.completed = true;
      } else {
        // change style of description to normal
        const description = listItem.querySelector('.description');
        description.style.textDecoration = 'none';
        description.style.color = '#333333';
        task.completed = false;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}