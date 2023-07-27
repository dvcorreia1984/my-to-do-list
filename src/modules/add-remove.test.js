import { addTask } from './add-remove.js';

test('Add a new task to list', () => {
  document.body.innerHTML = '<form id="todo" class="todo"></form>';
  addTask();
  const list = document.querySelectorAll('.todo-item');
  expect(list).toHaveLength(1);
});
