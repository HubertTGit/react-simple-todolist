import { Dispatch } from 'react';
import { IReducerPayload } from '../utils/todoReducer';

type TodoHeaderProps = {
  onDelete: Dispatch<IReducerPayload>;
  title: string;
};
export default function TodoHeader({ onDelete, title }: TodoHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <h1>{title}</h1>
      <button
        className="text-sm text-red-600 hover:underline"
        onClick={() => onDelete({ type: 'clear', id: '' })}
      >
        clear
      </button>
    </div>
  );
}
