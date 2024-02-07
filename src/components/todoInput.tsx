import { useState } from 'react';
import { IReducerPayload } from '../utils/todoReducer';

type TodoProps = {
  onEnter: (payload: IReducerPayload) => void;
};

export default function TodoInput({ onEnter }: TodoProps) {
  const [todo, setTodo] = useState<string>('');

  const _id = (Math.random() * 1000_000).toString();

  return (
    <input
      data-testid="todo-input"
      className="border border-gray-600 p-3 rounded-lg w-full"
      type="text"
      value={todo}
      placeholder="type then press enter.."
      onChange={(e) => setTodo(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onEnter({ task: todo, id: _id, type: 'add' });
          setTodo('');
        }
      }}
    />
  );
}
