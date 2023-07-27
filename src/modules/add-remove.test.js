// add-remove.test.js

import { before } from 'lodash';
import { addTask, removeTask, Task } from './add-remove';

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
    Task.tasks = [];
  });

  test('should remove task', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [new Task(false, 'Second Task', 1)];
    const result = removeTask(1, initialTasks);
    expect(result).toEqual(expectedTasks);
  });

  // should remove correct task
  test('should remove correct task', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
    ];
    const expectedTasks = [new Task(false, 'First Task', 1)];
    const result = removeTask(2, initialTasks);
    expect(result).toEqual(expectedTasks);
  });

  test('should update index after task removal correctly', () => {
    const initialTasks = [
      new Task(false, 'First Task', 1),
      new Task(false, 'Second Task', 2),
      new Task(false, 'Third Task', 3),
    ];
    const expectedTasks = [new Task(false, 'Second Task', 1), new Task(false, 'Third Task', 2)];
    const result = removeTask(1, initialTasks);
    expect(result).toEqual(expectedTasks);
  });
});
