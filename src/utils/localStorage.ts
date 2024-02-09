import { Todoitem } from '../types/todo.model';

export const setLocalStorage = (data: Todoitem[]) => {
  localStorage.setItem('todos', JSON.stringify(data));
};

export const getLocalStorage = (): Todoitem[] => {
  const todos = localStorage.getItem('todos');

  return JSON.parse(todos || '[]');
};
