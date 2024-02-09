import { Dispatch, SetStateAction, useState } from 'react';
import { TodoItem } from '../types/todo.model';

type TodoProps = {
  onEnter: Dispatch<SetStateAction<TodoItem[]>>;
};

export const TodoInput = ({ onEnter }: TodoProps) => {
  const [todo, setTodo] = useState<string>('');

  const _id = (Math.random() * 1000_000).toString();

  return (
    <div className="py-2">
      <input
        data-testid="todo-input"
        className="border border-gray-600 p-3 rounded-lg w-full"
        type="text"
        value={todo}
        placeholder="type then press enter.."
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            onEnter((prev: TodoItem[]) => [
              { id: _id, task: todo, isCompleted: false },
              ...prev,
            ]);
            setTodo('');
          }
        }}
      />
    </div>
  );
};
