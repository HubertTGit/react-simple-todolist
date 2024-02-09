import { Dispatch, SetStateAction } from 'react';
import { TodoItem } from '../types/todo.model';

type TodoHeaderProps = {
  onDelete: Dispatch<SetStateAction<TodoItem[]>>;
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
        onClick={() =>
          onDelete((prev: TodoItem[]) => prev.filter((o) => !o.isCompleted))
        }
      >
        clear completed
      </button>
    </div>
  );
};
