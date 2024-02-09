import { useState } from 'react';

type TodoProps = {
  onEnter: (t: string) => void;
};

export const TodoInput = ({ onEnter }: TodoProps) => {
  const [todo, setTodo] = useState<string>('');

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
            onEnter(todo);
            setTodo('');
          }
        }}
      />
    </div>
  );
};
