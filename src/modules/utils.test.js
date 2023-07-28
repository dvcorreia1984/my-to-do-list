import { editTaskDescription, changeTaskStatus } from './utils.js';
import { Task } from './add-remove.js';

describe('Edit task Description', () => {
  beforeEach(() => {
    Task.tasks = [];
  });

  test('should edit task description', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'New Task', 2),
    ];
    const result = editTaskDescription(2, initialTasks, 'New Task');
    expect(result).toEqual(expectedTasks);
  });

  // should not edit task description if index is not found
  test('should not edit task description if index is not found', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const result = editTaskDescription(3, initialTasks, 'New Task');
    expect(result).toEqual(expectedTasks);
  });

  // should not edit task description if new description is empty
  test('should not edit task description if new description is empty', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const result = editTaskDescription(2, initialTasks, '');
    expect(result).toEqual(expectedTasks);
  });
});

describe('Toggle task completion status', () => {
  beforeEach(() => {
    Task.tasks = [];
  });

  test('should toggle task status', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [
      new Task(true, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const result = changeTaskStatus(1, initialTasks, true);
    expect(result).toEqual(expectedTasks);
  });

  test('should not toggle task status if index is not found', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const result = changeTaskStatus(3, initialTasks, true);
    expect(result).toEqual(expectedTasks);
  });

  test('should not toggle task status if completed is not a boolean', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const result = changeTaskStatus(2, initialTasks, 'true');
    expect(result).toEqual(expectedTasks);
  });
});