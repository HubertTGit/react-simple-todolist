import { useRef, useState } from 'react';
import { TodoItem } from '../types/todo.model';

type TodoItemProps = {
  task: TodoItem;
  onUpdate: (t: string, id: string) => void;
  onToggle: (id: string) => void;
};

export const TodoItemWidget = ({ task, onUpdate, onToggle }: TodoItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>(task.task);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <li
      data-testid="todo-item"
      className={`p-2 flex gap-2 text-white border border-t-0 border-b-white ${
        task.isCompleted ? 'bg-slate-500 line-through ' : 'bg-emerald-500 '
      }`}
      onClick={() => {
        onToggle(task.id);
      }}
      onDoubleClick={() => {
        setTimeout(() => {
          ref.current?.select();
        }, 250);

        setTimeout(() => {
          setEdit(true);
        }, 200);
      }}
    >
      {edit ? (
        <input
          data-testid="todo-item-input"
          className="flex-auto text-slate-600 outline-none"
          ref={ref}
          value={text}
          onBlur={() => {
            setEdit(false);
            setText(task.task);
          }}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              setEdit(false);
              onUpdate(text, task.id);
            }
          }}
        />
      ) : (
        <div
          data-testid="todo-item-text"
          style={{ userSelect: 'none' }}
          className={`flex-auto ${task.isCompleted && 'line-through'}`}
        >
          {task.task}
        </div>
      )}
      <div>
        {task.isCompleted ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </li>
  );
};
