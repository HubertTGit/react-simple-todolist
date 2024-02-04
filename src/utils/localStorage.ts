import { Itodo } from './todoReducer';

export const setLS = (data: Itodo[]) => {
  localStorage.setItem('todos', JSON.stringify(data));
};

export const getLS = (): Itodo[] => {
  const todos = localStorage.getItem('todos');

  return JSON.parse(todos || '[]');
};
