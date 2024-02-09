import { TodoItem } from '../types/todo.model';

export const setLocalStorage = (data: TodoItem[]) => {
  localStorage.setItem('todos', JSON.stringify(data));
};

export const getLocalStorage = (): TodoItem[] => {
  const todos = localStorage.getItem('todos');

  return JSON.parse(todos || '[]');
};
