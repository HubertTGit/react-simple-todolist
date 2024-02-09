import { Dispatch } from 'react';
import { TodoReducerAction } from '../types/todo.model';

type TodoHeaderProps = {
  onDelete: Dispatch<TodoReducerAction>;
  title: string;
};
export const TodoHeader = ({ onDelete, title }: TodoHeaderProps) => {
  return (
    <div
      className="flex justify-between items-center w-full py-2"
      data-testid="todo-heading"
    >
      <h1>{title}</h1>
      <button
        className="text-sm text-red-600 hover:underline"
        onClick={() => onDelete({ type: 'clear', id: '' })}
      >
        clear completed
      </button>
    </div>
  );
};
