import { TodoItem } from '../types/todo.model';
import { TodoItemWidget } from './todoItem';

type TodoListProps<T> = {
  todos: T[];
  onUpdate: (t: string, id: string) => void;
  onToggle: (id: string) => void;
};

export const TodoList = ({
  todos,
  onUpdate,
  onToggle,
}: TodoListProps<TodoItem>) => {
  return (
    <ul className="h-[400px] overflow-x-hidden w-full" data-testid="todo-list">
      {todos.map((t) => (
        <TodoItemWidget
          key={t.id}
          task={t}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
      {todos.length === 0 && (
        <li className=" text-center mt-5" data-testid="noitems">
          No Items!
        </li>
      )}
    </ul>
  );
};
