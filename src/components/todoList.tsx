import { Dispatch, SetStateAction } from 'react';
import { TodoItem } from '../types/todo.model';
import { TodoItemWidget } from './todoItem';

type TodoListProps<T> = {
  todos: T[];
  onUpdate: Dispatch<SetStateAction<TodoItem[]>>;
};

export const TodoList = ({ todos, onUpdate }: TodoListProps<TodoItem>) => {
  return (
    <ul className="h-[400px] overflow-x-hidden w-full" data-testid="todo-list">
      {todos.map((t) => (
        <TodoItemWidget key={t.id} task={t} onUpdate={onUpdate} />
      ))}
      {todos.length === 0 && (
        <li className=" text-center mt-5" data-testid="noitems">
          No Items!
        </li>
      )}
    </ul>
  );
};
