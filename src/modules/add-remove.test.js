// add-remove.test.js

import { addTask, Task } from './add-remove';

// Test the addTask function
describe('addTask', () => {
  beforeEach(() => {
    // Clear tasks before each test
    Task.tasks = [];
  });

  test('should not add task if inputValue is empty', () => {
    const inputValue = '';
    const initialTasks = [];
    const expectedTasks = [];
    const result = addTask(inputValue, initialTasks);
    expect(result).toEqual(expectedTasks);
  });

  test('should add task if inputValue is not empty', () => {
    const inputValue = 'New Task';
    const initialTasks = [];
    const expectedTasks = [new Task(false, 'New Task', 1)];
    const result = addTask(inputValue, initialTasks);
    expect(result).toEqual(expectedTasks);
  });

  test('should add task with correct index', () => {
    const inputValue = 'First Task';
    const initialTasks = [new Task(false, 'Existing Task', 1)];
    const expectedTasks = [
      new Task(false, 'Existing Task', 1),
      new Task(false, 'First Task', 2),
    ];
    const result = addTask(inputValue, initialTasks);
    expect(result).toEqual(expectedTasks);
  });
});

// Test the removeTask function
describe('removeTask', () => {
  beforeEach(() => {
    // Clear tasks before each test
    Task.tasks = [];
  });

  test('should remove task at index', () => {
    const initialTasks = [
      new Task(false, 'Existing Task', 1),
      new Task(false, 'First Task', 2),
    ];
    const expectedTasks = [new Task(false, 'Existing Task', 1)];
    const result = Task.removeTask(1);
    expect(result).toEqual(expectedTasks);
  });

  test('should update index of tasks after removal', () => {
    const initialTasks = [
      new Task(false, 'Existing Task', 1),
      new Task(false, 'First Task', 2),
    ];
    const expectedTasks = [new Task(false, 'Existing Task', 1)];
    const result = Task.removeTask(1);
    expect(result).toEqual(expectedTasks);
  });
});
