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
      <button onClick={() => onDelete({ type: 'clear', id: '' })}>clear</button>
    </div>
  );
}
